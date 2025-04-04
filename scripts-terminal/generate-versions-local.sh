#!/bin/bash
# Script: generate-remote-versions.sh

# Eliminar el archivo remote_versions.txt si existe
rm -f remote_versions.txt

# Función para convertir nombres de camelCase a kebab-case
to_kebab() {
  echo "$1" | sed -E 's/([a-z0-9])([A-Z])/\1-\2/g' | tr '[:upper:]' '[:lower:]'
}

# Iterar sobre cada directorio en components/
for dir in components/*; do
  # Verificar que exista un package.json en el directorio
  if [ -f "$dir/package.json" ]; then
    component=$(basename "$dir")
    # Convertir el nombre del componente a kebab-case
    component_kebab=$(to_kebab "$component")
    pkg="@flash-global66/g-${component_kebab}"
    
    # Obtener la versión local desde package.json y eliminar espacios
    version_local=$(node -p "require('./$dir/package.json').version" 2>/dev/null | tr -d '[:space:]')
    if [ -z "$version_local" ]; then
      version_local="N/A"
    fi

    # Escribir la línea en remote_versions.txt sin espacios adicionales
    echo "${pkg}:${version_local}" >> remote_versions.txt
  fi
done

echo "Archivo remote_versions.txt generado con éxito."
