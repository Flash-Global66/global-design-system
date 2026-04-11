import GCountryFlag from "./src/CountryFlag.vue";
import { useCountryFlag } from "./src/hooks/use-country-flag";
import { FLAG_SIZES, COUNTRIES_CODE, SPECIAL_CODES, ALL_FLAG_CODES } from './src/constants/country-flag.constants';
import type { CountryCode, SpecialCode, FlagCode, FlagSize, FlagState } from './src/types/country-flag.types';
import { flagProps, validateFlagProps } from './src/country-flag.props';
import type { FlagProps } from './src/country-flag.props';

export { 
  GCountryFlag,
  useCountryFlag,
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