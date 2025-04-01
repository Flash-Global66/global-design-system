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

// Función para obtener las dependencias internas de un componente
function getInternalDependencies(componentDir) {
  const packageJson = readPackageJson(componentDir);
  if (!packageJson) return [];
  
  // Combinar peerDependencies, dependencies y devDependencies
  const allDeps = {
    ...(packageJson.peerDependencies || {}),
    ...(packageJson.dependencies || {}),
    ...(packageJson.devDependencies || {})
  };
  
  // Filtrar solo las dependencias que son componentes propios (@flash-global66/g-)
  const internalDeps = Object.keys(allDeps).filter(dep => 
    dep.startsWith('@flash-global66/g-')
  );
  
  return internalDeps;
}

// Función para construir un componente
function buildComponent(component) {
  console.log(`Building component: ${component}`);
  try {
    // Obtener el nombre real del paquete desde package.json
    const packageName = getPackageName(component);
    
    if (!packageName) {
      console.error(`No se pudo determinar el nombre del paquete para ${component}`);
      return false;
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
    return true;
  } catch (error) {
    console.error(`❌ Failed to build component ${component}:`, error.message);
    return false;
  }
}

// Función para ordenar componentes basado en sus dependencias (ordenación topológica)
function sortComponentsByDependencies(components) {
  // Crear un mapa de componentes a sus dependencias internas
  const dependencyMap = {};
  const nameToDir = {};
  
  // Primero, mapear nombres de paquetes a directorios
  components.forEach(dir => {
    const name = getPackageName(dir);
    if (name) {
      nameToDir[name] = dir;
    }
  });
  
  // Luego, construir el mapa de dependencias
  components.forEach(dir => {
    const deps = getInternalDependencies(dir).map(dep => {
      // Convertir el nombre de la dependencia a su directorio correspondiente
      return nameToDir[dep] || null;
    }).filter(Boolean);
    
    dependencyMap[dir] = deps;
  });
  
  // Algoritmo de ordenación topológica
  const visited = new Set();
  const temp = new Set();  // Para detectar ciclos
  const order = [];
  
  function visit(node) {
    if (temp.has(node)) {
      console.warn(`⚠️ Ciclo de dependencias detectado con ${node}`);
      return;
    }
    
    if (visited.has(node)) return;
    
    temp.add(node);
    
    // Visitar primero todas las dependencias
    (dependencyMap[node] || []).forEach(dep => {
      visit(dep);
    });
    
    temp.delete(node);
    visited.add(node);
    order.push(node);
  }
  
  // Visitar todos los nodos
  components.forEach(component => {
    if (!visited.has(component)) {
      visit(component);
    }
  });
  
  return order;
}

// Función principal
function main() {
  if (targetComponent) {
    // Si se especificó un componente, verificar si es buildable
    if (isBuildable(targetComponent)) {
      const success = buildComponent(targetComponent);
      process.exit(success ? 0 : 1);
    } else {
      console.log(`Component ${targetComponent} is not marked as buildable or doesn't exist.`);
      process.exit(1);
    }
  } else {
    // Obtener todos los componentes buildables
    const buildableComponents = fs.readdirSync(componentsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
      .filter(isBuildable);
    
    console.log(`Found ${buildableComponents.length} buildable components.`);
    
    // Ordenar componentes basado en sus dependencias
    const orderedComponents = sortComponentsByDependencies(buildableComponents);
    
    console.log("Building components in dependency order:");
    console.log(orderedComponents.join(" → "));
    
    // Construir componentes en el orden determinado
    let buildFailed = false;
    for (const component of orderedComponents) {
      const success = buildComponent(component);
      if (!success) {
        buildFailed = true;
        break;
      }
    }
    
    if (buildFailed) {
      console.error("❌ Build process failed");
      process.exit(1);
    } else {
      console.log("✅ All components built successfully");
      process.exit(0);
    }
  }
}

main();