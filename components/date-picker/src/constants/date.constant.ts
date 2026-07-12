/**
 * Tipos de selección soportados por el date-picker.
 *
 * Portado byte-exact desde `element-plus/es/constants/date.mjs`.
 */
export const datePickTypes = [
  'year',
  'years',
  'month',
  'months',
  'date',
  'dates',
  'week',
  'datetime',
  'datetimerange',
  'daterange',
  'monthrange',
  'yearrange',
] as const;

/**
 * Tipo unión derivado de `datePickTypes`.
 */
export type DatePickType = (typeof datePickTypes)[number];
