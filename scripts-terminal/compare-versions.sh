#!/bin/bash

# Verificar que el archivo remote_versions.txt exista
if [ ! -f remote_versions.txt ]; then
  echo "Error: remote_versions.txt no encontrado."
  exit 1
fi

# Función para convertir nombres de camelCase a kebab-case
to_kebab() {
  echo "$1" | sed -E 's/([a-z0-9])([A-Z])/\1-\2/g' | tr '[:upper:]' '[:lower:]'
}

# Iterar sobre cada directorio en components/
for dir in components/*; do
  component=$(basename "$dir")
  # Convertir el nombre a kebab-case para que coincida con el formato del paquete
  component_kebab=$(to_kebab "$component")
  pkg="@flash-global66/g-${component_kebab}"

  echo "📦 $pkg:"
  
  # 1. Obtener la versión local desde package.json del componente
  if [ -f "$dir/package.json" ]; then
    pkg_json_version=$(grep -o '"version": "[^"]*"' "$dir/package.json" | cut -d'"' -f4)
    echo "* Versión en package.json: $pkg_json_version"
  else
    echo "* Versión en package.json: No encontrado"
    pkg_json_version="N/A"
  fi

  # 2. Obtener la versión local desde remote_versions.txt
  version_local=$(grep "^$pkg:" remote_versions.txt | cut -d':' -f2 | tr -d '[:space:]')
  if [ -z "$version_local" ]; then
    version_local="N/A"
  fi
  echo "* Versión en remote_versions.txt: $version_local"

  # 3. Obtener la versión publicada en el registry
  version_registry=$(npm view "$pkg" version --registry=https://npm.pkg.github.com 2>/dev/null)
  if [ -z "$version_registry" ]; then
    version_registry="N/A"
  fi
  echo "* Versión en Registry: $version_registry"

  # 4. Obtener todos los tags disponibles para el paquete
  echo "* Tags disponibles:"
  tags=$(npm view "$pkg" dist-tags --registry=https://npm.pkg.github.com 2>/dev/null)
  if [ -z "$tags" ]; then
    echo "No hay tags disponibles"
  else
    echo "$tags" | sed 's/^/     /'
  fi

  # Comparar versiones y mostrar estado
  echo "* Estado:"
  if [[ "$pkg_json_version" != "$version_registry" ]]; then
    echo "❌ package.json vs Registry: Desincronizado"
  else
    echo "✅ package.json vs Registry: Sincronizado"
  fi
  
  if [[ "$version_local" != "$version_registry" ]]; then
    echo "❌ remote_versions.txt vs Registry: Desincronizado"
  else
    echo "✅ remote_versions.txt vs Registry: Sincronizado"
  fi
  
  echo ""
done
