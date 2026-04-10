import GFlag from "./src/Flag.vue";
import { useFlag } from "./src/hooks/use-flag";
import { FLAG_SIZES, COUNTRIES_CODE, SPECIAL_CODES, ALL_FLAG_CODES } from './src/constants/flag.constants';
import type { CountryCode, SpecialCode, FlagCode, FlagSize, FlagState } from './src/types/flag.types';
import { flagProps, validateFlagProps } from './src/flag.props';
import type { FlagProps } from './src/flag.props';

export { 
  GFlag,
  useFlag,
  FLAG_SIZES,
  COUNTRIES_CODE,
  SPECIAL_CODES,
  ALL_FLAG_CODES,
  flagProps, 
  validateFlagProps
};

export type {
  CountryCode,
  SpecialCode,
  FlagCode,
  FlagSize,
  FlagState,
  FlagProps
};