#!/bin/bash

# Colores para mejor legibilidad
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Instalar semver si no está presente (requiere Node.js)
if ! command -v semver &>/dev/null; then
  echo -e "${BLUE}Instalando semver...${NC}"
  npm install -g semver
fi

# Generar archivo con versiones publicadas
echo -e "${BLUE}Generando registry_versions.txt...${NC}"
rm -f registry_versions.txt

to_kebab() {
  echo "$1" | sed -E 's/([a-z0-9])([A-Z])/\1-\2/g' | tr '[:upper:]' '[:lower:]'
}

# Crear directorio de respaldo si no existe
BACKUP_DIR="backups-temporal/$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"
echo -e "${BLUE}Se crearán respaldos en: ${BACKUP_DIR}${NC}"

total_components=0
for dir in components/*; do
  if [ -f "$dir/package.json" ]; then
    ((total_components++))
    component=$(basename "$dir")
    component_kebab=$(to_kebab "$component")
    pkg="@flash-global66/g-${component_kebab}"
    
    # Hacer un respaldo del package.json original
    cp "$dir/package.json" "${BACKUP_DIR}/${component}_package.json"
    
    echo -e "Consultando ${YELLOW}${pkg}${NC}..."
    version_registry=$(npm view "$pkg" version --registry=https://npm.pkg.github.com 2>/dev/null || echo "N/A")
    echo "${pkg}:${version_registry}" >> registry_versions.txt
  fi
done

echo -e "${GREEN}✅ registry_versions.txt generado con ${total_components} componentes${NC}"

read -p "¿Crear tags Git? (s/n): " create_tags

components_updated=0
components_skipped=0
components_error=0

echo -e "${BLUE}Sincronizando versiones... Por favor espere.${NC}"

for dir in components/*; do
  if [ -f "$dir/package.json" ]; then
    component=$(basename "$dir")
    component_kebab=$(to_kebab "$component")
    pkg="@flash-global66/g-${component_kebab}"
    
    version_registry=$(grep "^$pkg:" registry_versions.txt | cut -d':' -f2 | tr -d '[:space:]')
    if [[ "$version_registry" == "N/A" ]]; then
      echo -e "${YELLOW}⚠️ $pkg no está publicado${NC}"
      ((components_skipped++))
      continue
    fi

    version_local=$(node -p "require('./$dir/package.json').version" | tr -d '[:space:]')
    
    if [[ "$version_local" != "$version_registry" ]]; then
      # Comparar versiones de manera segura
      semver_result=$(semver compare "$version_local" "$version_registry" 2>/dev/null)
      if [[ "$semver_result" == "1" ]]; then
        echo -e "${RED}⚠️ $pkg: Local ($version_local) > Registry ($version_registry)${NC}"
        read -p "  ¿Continuar y degradar a la versión del registro? (s/n): " respuesta
        if [[ "$respuesta" != "s" ]]; then
          echo -e "  ${YELLOW}Saltando este componente${NC}"
          ((components_skipped++))
          continue
        fi
      fi

      node -e "
        const fs = require('fs');
        const pkg = JSON.parse(fs.readFileSync('$dir/package.json', 'utf8'));
        pkg.version = '$version_registry';
        fs.writeFileSync('$dir/package.json', JSON.stringify(pkg, null, 2) + '\n');
      "
      
      if [ $? -eq 0 ]; then
        ((components_updated++))
        
        if [[ "$create_tags" == "s" ]]; then
          tag_name="@flash-global66/g-${component_kebab}@${version_registry}"
          git tag -a "$tag_name" -m "Versión $version_registry de $pkg" 2>/dev/null
          if [ $? -ne 0 ]; then
            echo -e "${YELLOW}⚠️ Tag '$tag_name' ya existe o error al crearlo${NC}"
          fi
        fi
      else
        echo -e "${RED}❌ Error al actualizar package.json de $pkg${NC}"
        ((components_error++))
      fi
    fi
  fi
done

echo -e "\n${BLUE}======== RESUMEN ========${NC}"
echo -e "Total componentes: ${total_components}"
echo -e "Actualizados: ${GREEN}${components_updated}${NC}"
echo -e "Omitidos: ${YELLOW}${components_skipped}${NC}"
echo -e "Errores: ${RED}${components_error}${NC}"

# IMPORTANTE: Separamos la creación de commit de la creación de tags
if [[ $components_updated -gt 0 ]]; then
  # Siempre preguntar por el commit si se actualizó algún componente
  read -p "¿Realizar commit de los cambios? (s/n): " do_commit
  if [[ "$do_commit" == "s" ]]; then
    git add components/*/package.json
    git commit -m "chore: synchronize versions with registry"
    
    # Verificar si el commit fue exitoso
    if [ $? -eq 0 ]; then
      echo -e "\n${GREEN}✅ Commit realizado correctamente${NC}"
      
      # Si también se crearon tags, sugerir push con --follow-tags
      if [[ "$create_tags" == "s" ]]; then
        echo -e "${BLUE}📌 Ejecuta 'git push --follow-tags' para subir cambios y tags.${NC}"
      else
        echo -e "${BLUE}📌 Ejecuta 'git push' para subir los cambios.${NC}"
      fi
    else
      echo -e "\n${RED}❌ Error al realizar el commit${NC}"
      echo -e "${YELLOW}Verifica si hay problemas con tu configuración de Git${NC}"
    fi
  else
    echo -e "\n${YELLOW}Los cambios están pendientes para commit${NC}"
    echo -e "${BLUE}Puedes hacer commit manualmente con:${NC}"
    echo -e "git add components/*/package.json"
    echo -e "git commit -m \"chore: sincronizar versiones con registry\""
  fi
fi

echo -e "\n${GREEN}✅ Proceso completado${NC}"
echo -e "${BLUE}💡 Ejecuta 'yarn compare-versions' para verificar la sincronización${NC}"
