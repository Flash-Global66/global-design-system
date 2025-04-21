export type OptionSegmented ={
  label: string
  value: string | number | boolean
  disabled?: boolean
  [key: string]: any
}

export type RoundedSegmented = "md" | "lg";

export type SizeSegmented = "sm" | "md";

export type VariantSegmented = "default" | "primary";
