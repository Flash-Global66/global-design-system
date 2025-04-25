import { ICON_SETS } from "@flash-global66/g-icon-font/index.js";

export const generatePeerDepsList = (deps: Record<string, string>): string => {
  if (!deps || Object.keys(deps).length === 0) {
    return 'No tiene dependencias';
  }
  return Object.entries(deps)
    .map(([pkg, version]) => `- ${pkg}: ${version}`)
    .join('\n'); 
};

export const generatePeerDepsInstalls = (deps: Record<string, string>, external = false): string => {
  if (!deps || Object.keys(deps).length === 0) {
    return 'No tiene dependencias';
  }

  const prefixGlobal = '@flash-global66';

  if (external) {
    return Object.entries(deps)
      .filter(([name]) => !name.startsWith(prefixGlobal))
      .map(([name, version]) => `${name}@${version}`)
      .join(' ')
  }

  return Object.entries(deps)
    .filter(([name]) => name.startsWith(prefixGlobal))
    .map(([name, version]) => `${name}@${version}`)
    .join(' ')
};


export const generateIconOptions = () => {
  const options: string[] = [];
  
  Object.entries(ICON_SETS).forEach(([weight, icons]) => {
    icons.forEach(icon => {
      options.push(`${weight} ${icon}`);
    });
  });
  
  return options;
};
