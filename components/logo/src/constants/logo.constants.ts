export const LOGO_NAMES = [
  'icon-bre-b',
  'icon-global66',
  'label-global66',
  'logo-global66',
] as const;

export const LOGO_SIZES = {
  'xs': '12px',
  'sm': '16px',
  'md': '24px',
  'lg': '32px',
} as const;

/** Dimensiones del contenedor en carga/error (ancho extra para que quepa "404") */
export const LOGO_PLACEHOLDER_SIZES = {
  xs: { width: '28px', height: '12px' },
  sm: { width: '34px', height: '16px' },
  md: { width: '40px', height: '24px' },
  lg: { width: '52px', height: '32px' },
} as const;
