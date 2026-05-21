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

export const LOGO_FILTERS = {
  none: 'none',
  grayscale: 'grayscale(100%)',
  black: 'brightness(0)',
  white: 'brightness(0) invert(1)',
  sepia: 'sepia(100%)',
  'opacity-50': 'opacity(50%)',
  'high-contrast': 'contrast(200%)',
  invert: 'invert(100%)',
} as const;

export const LOGO_FILTER_OPTIONS = Object.keys(LOGO_FILTERS) as (keyof typeof LOGO_FILTERS)[];

export const LOGO_FILTER_LABELS: Record<keyof typeof LOGO_FILTERS, string> = {
  none: 'Original',
  grayscale: 'Gris',
  black: 'Negro',
  white: 'Blanco',
  sepia: 'Sepia',
  'opacity-50': '50% opacidad',
  'high-contrast': 'Contraste alto',
  invert: 'Invertido',
};
