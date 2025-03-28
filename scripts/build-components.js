#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directorio de componentes
const componentsDir = path.join(path.resolve(__dirname, '..'), 'components');

// Obtener el componente específico de los argumentos (si existe)
const targetComponent = process.argv[2];

// Función auxiliar para leer el package.json de un componente
function readPackageJson(componentDir) {
  try {
    const packageJsonPath = path.join(componentsDir, componentDir, 'package.json');
    return JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  } catch (error) {
    console.error(`Error al leer package.json para ${componentDir}:`, error.message);
    return null;
  }
}

// Función para verificar si un componente es "buildable"
function isBuildable(componentDir) {
  const packageJson = readPackageJson(componentDir);
  return packageJson?.buildable === true;
}

// Función para obtener el nombre del paquete desde package.json
function getPackageName(componentDir) {
  const packageJson = readPackageJson(componentDir);
  return packageJson?.name;
}

// Función para construir un componente
function buildComponent(component) {
  console.log(`Building component: ${component}`);
  try {
    // Obtener el nombre real del paquete desde package.json
    const packageName = getPackageName(component);
    
    if (!packageName) {
      console.error(`No se pudo determinar el nombre del paquete para ${component}`);
      return;
    }
    
    // Ejecutar el script de build del componente usando el nombre completo del paquete
    execSync(`npx lerna run build --scope ${packageName}`, { 
      stdio: 'inherit' 
    });
    
    // Generar tipos
    execSync(`npx lerna run build:types --scope ${packageName}`, { 
      stdio: 'inherit' 
    });
    
    console.log(`✅ Component ${component} built successfully`);
  } catch (error) {
    console.error(`❌ Failed to build component ${component}:`, error.message);
  }
}

// Función principal
function main() {
  if (targetComponent) {
    // Si se especificó un componente, verificar si es buildable
    if (isBuildable(targetComponent)) {
      buildComponent(targetComponent);
    } else {
      console.log(`Component ${targetComponent} is not marked as buildable or doesn't exist.`);
    }
  } else {
    // Construir todos los componentes buildables
    const components = fs.readdirSync(componentsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    const buildableComponents = components.filter(isBuildable);
    
    console.log(`Found ${buildableComponents.length} buildable components out of ${components.length} total.`);
    
    for (const component of buildableComponents) {
      buildComponent(component);
    }
  }
}

main();
