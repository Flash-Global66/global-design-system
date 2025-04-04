#!/bin/bash

# Colores para mejor legibilidad
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para convertir nombres de camelCase a kebab-case
to_kebab() {
  echo "$1" | sed -E 's/([a-z0-9])([A-Z])/\1-\2/g' | tr '[:upper:]' '[:lower:]'
}

# Preguntamos si realmente quiere eliminar todas las tags
echo -e "${RED}⚠️ ADVERTENCIA: Este script eliminará TODAS las tags Git existentes (sin filtrar por patrón)${NC}"
read -p "¿Está seguro de continuar? (s/n): " continue_reset
if [[ "$continue_reset" != "s" ]]; then
  echo -e "${YELLOW}Operación cancelada.${NC}"
  exit 0
fi

# Obtener todas las tags existentes (sin filtrar por patrón)
echo -e "${BLUE}Buscando todas las tags existentes...${NC}"
ALL_TAGS=$(git tag)

if [[ -z "$ALL_TAGS" ]]; then
  echo -e "${YELLOW}No se encontraron tags para eliminar.${NC}"
else
  # Contar cuántas tags hay
  TAG_COUNT=$(echo "$ALL_TAGS" | wc -l)
  echo -e "${BLUE}Se encontraron ${TAG_COUNT} tags para eliminar.${NC}"
  
  # Eliminar todas las tags locales
  echo -e "${BLUE}Eliminando todas las tags locales...${NC}"
  git tag | xargs git tag -d
  echo -e "${GREEN}✅ Todas las tags locales eliminadas.${NC}"
  
  # Preguntar si también quiere eliminar las tags remotas
  read -p "¿Eliminar también todas las tags remotas? (s/n): " delete_remote
  if [[ "$delete_remote" == "s" ]]; then
    # Obtener el nombre del remoto (generalmente es 'origin')
    REMOTE=$(git remote | head -n 1)
    echo -e "${BLUE}Eliminando todas las tags remotas en $REMOTE...${NC}"
    
    # Método mejorado: guardar las tags y eliminarlas una por una
    echo "$ALL_TAGS" > tags_to_delete.txt
    cat tags_to_delete.txt | while read tag; do
      echo "Eliminando tag remota: $tag"
      git push $REMOTE --delete "$tag" 2>/dev/null
      if [ $? -ne 0 ]; then
        echo -e "${YELLOW}⚠️ No se pudo eliminar la tag remota: $tag${NC}"
      fi
    done
    rm tags_to_delete.txt
    
    # Verificar que todas las tags remotas fueron eliminadas
    echo -e "${BLUE}Verificando eliminación de tags remotas...${NC}"
    TAG_COUNT_REMOTE=$(git ls-remote --tags $REMOTE | grep -c "refs/tags")
    if [[ $TAG_COUNT_REMOTE -eq 0 ]]; then
      echo -e "${GREEN}✅ Confirmado: No hay tags en el repositorio remoto.${NC}"
    else
      echo -e "${YELLOW}⚠️ Aún quedan $TAG_COUNT_REMOTE tags en el repositorio remoto.${NC}"
    fi
  fi
fi

# Crear nuevas tags para las últimas versiones
echo -e "\n${BLUE}Creando tags para las últimas versiones publicadas...${NC}"
tags_created=0

for dir in components/*; do
  if [ -f "$dir/package.json" ]; then
    component=$(basename "$dir")
    component_kebab=$(to_kebab "$component")
    pkg="@flash-global66/g-${component_kebab}"
    
    # Obtener solamente la última versión publicada
    latest_version=$(npm view "$pkg" version --registry=https://npm.pkg.github.com 2>/dev/null || echo "N/A")
    
    if [[ "$latest_version" == "N/A" ]]; then
      echo -e "${YELLOW}$pkg: No publicado, omitiendo.${NC}"
      continue
    fi
    
    # Crear una única tag para este componente
    tag_name="${pkg}@${latest_version}"
    git tag -a "$tag_name" -m "Última versión de $pkg: $latest_version"
    
    if [ $? -eq 0 ]; then
      echo -e "${GREEN}✅ $pkg: Tag creada para versión $latest_version${NC}"
      ((tags_created++))
    else
      echo -e "${RED}❌ $pkg: Error al crear tag${NC}"
    fi
  fi
done

echo -e "\n${BLUE}======== RESUMEN ========${NC}"
echo -e "Total de tags creadas: ${GREEN}${tags_created}${NC} (una por componente)"

if [[ $tags_created -gt 0 ]]; then
  read -p "¿Subir las nuevas tags al repositorio remoto? (s/n): " push_tags
  if [[ "$push_tags" == "s" ]]; then
    git push --tags
    echo -e "${GREEN}✅ Tags enviadas al repositorio remoto.${NC}"
  fi
fi

echo -e "\n${GREEN}✅ Proceso completado${NC}"
