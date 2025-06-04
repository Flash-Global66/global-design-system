// eslint-disable-next-line @typescript-eslint/no-var-requires
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

module.exports = {
  content: [
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./stories/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        1: ["0.62rem", "1rem"], // 10px, 16px
        2: ["0.75rem", "1.125rem"], // 12px, 18px
        3: ["0.875rem", "1.375rem"], // 14px, 22px
        4: ["1rem", "1.5rem"], // 16px, 24px
        5: ["1.125rem", "1.75rem"], // 18px, 28px
        6: ["1.25rem", "1.875rem"], // 20px, 30px
        7: ["1.37rem", "2rem"], // 22px, 32px
        8: ["1.50rem", "2.25rem"], // 24px, 36px
        9: ["1.75rem", "2.625rem"], // 28px, 42px
        10: ["2rem", "3rem"], // 32px, 48px
        11: ["2.52rem", "3.75rem"], // 40px, 60px
        12: ["3rem", "4.5rem"], // 48px, 72px
        // Valores personalizados a eliminar
        "8px": "8px",
        "2xs": "10px",
        "13px": "13px",
      },
      zIndex: {
        100: "100",
      },
      backgroundColor: {
        "primary-bg": "var(--color-bg-primary)",
        "sec-def-bg": "var(--color-bg-sec-default)",
        "sec-hover-bg": "var(--color-bg-sec-default-hover)",
        "sec-press-bg": "var(--color-bg-sec-default-press)",
        "disab-lt-bg": "var(--color-disabled-light)",
        "inverse-bg": "var(--color-bg-inverse)",
        "success-bg": "var(--color-bg-success)",
        "error-bg": "var(--color-bg-error)",
        "warning-bg": "var(--color-bg-warning)",
        "info-bg": "var(--color-bg-info)",
      },
      textColor: {
        "primary-txt": "var(--color-txt-primary)",
        "secondary-txt": "var(--color-txt-secondary)",
        "terciary-txt": "var(--color-txt-terciary)",
        "disabled-txt": "var(--color-txt-disabled)",
        "disab-lt-txt": "var(--color-txt-disabled-light)",
        "inverse-txt": "var(--color-txt-inverse)",
        "success-txt": "var(--color-txt-success)",
        "error-txt": "var(--color-txt-error)",
        "warning-txt": "var(--color-txt-warning)",
        "info-txt": "var(--color-txt-info)",
      },
      borderColor: {
        "primary-bd": "var(--color-border-primary)",
        "secondary-bd": "var(--color-border-secondary)",
        "disabled-bd": "var(--color-border-disabled)",
        "disab-lt-bd": "var(--color-border-disabled-light)",
        "inverse-bd": "var(--color-border-inverse)",
        "success-bd": "var(--color-border-success)",
        "error-bd": "var(--color-border-error)",
        "warning-bd": "var(--color-border-warning)",
        "info-bd": "var(--color-border-info)",
      },
      borderRadius: {
        // Valores nuevos
        none: "0rem", // 0px
        xs: "0.125rem", // 2px
        sm: "0.25rem", // 4px
        md: "0.50rem", // 8px
        lg: "1rem", // 16px
        xl: "1.50rem", // 24px
        "2xl": "6.25rem", // 100px
      },
      colors: {
        // semantic tokens
        "primary-def": "var(--color-primary)",
        "primary-def-hover": "var(--color-primary-hover)",
        "primary-def-press": "var(--color-primary-press)",
        "primary-def-disabled": "var(--color-primary-disabled)",
        "success-def": "var(--color-success)",
        "error-def": "var(--color-error)",
        "warning-def": "var(--color-warning)",
        "info-def": "var(--color-info)",
        "icon-primary": "var(--color-icon-primary)",
        "icon-secondary": "var(--color-icon-secondary)",
        "icon-terciary": "var(--color-icon-terciary)",
        "icon-disabled": "var(--color-icon-disabled)",
        "icon-disab-lt": "var(--color-icon-disabled-light)",
        "icon-inverse": "var(--color-icon-inverse)",
        "icon-success": "var(--color-icon-success)",
        "icon-error": "var(--color-icon-error)",
        "icon-warning": "var(--color-icon-warning)",
        "icon-info": "var(--color-icon-info)",
        white: "#FFFFFF",
        black: "#0B0B0B",
        grey: {
          // Nuevos
          20: "#E9EBF8",
          25: "#FAFBFF",
          50: "#EFF0F2",
          100: "#CDD0D8",
          200: "#B5BAC5",
          300: "#949AAB",
          400: "#7F869A",
          500: "#5F6881",
          600: "#565F75",
          700: "#434A5C",
          800: "#343947",
          900: "#282C36",
        },
        everBlue: {
          // Nuevos
          50: "#e9edf8",
          100: "#bac7e8",
          200: "#98abdd",
          300: "#6985ce",
          400: "#4c6dc5",
          500: "#1f49b6",
          600: "#1c42a6",
          700: "#163481",
          800: "#112864",
          900: "#0d1f4c",
        },
        nightBlue: {
          // Nuevos
          50: "#e9ebf2",
          100: "#bac0d5",
          200: "#98a2c1",
          300: "#6a77a5",
          400: "#4d5d93",
          500: "#203478",
          600: "#1d2f6d",
          700: "#172555",
          800: "#112864",
          900: "#0d1632",
        },
        lightBlue: {
          50: "#EFFBFF",
          100: "#CCF4FF",
          200: "#B3EEFF",
          300: "#90E7FF",
          400: "#7BE2FF",
          500: "#5ADBFF",
          600: "#52C7E8",
          700: "#409BB5",
          800: "#32788C",
          900: "#265C6B",
        },
        green: {
          // Nuevos
          50: "#e6faf5",
          100: "#b0f1de",
          200: "#8aeacf",
          300: "#55e0b9",
          400: "#34daab",
          500: "#01d196",
          600: "#01be89",
          700: "#01946b",
          800: "#017353",
          900: "#00583f",
          // Viejos
          1: "#00B682",
          2: "#00C48C",
          3: "#01D196", // duplicado con success-500 (nuevo)
          4: "#7CDFC5",
          5: "#DDF2F3",
          6: "#E8F3E6", // Utilizado como bg de toast de success
          7: "#178406", // Utilizado como text y loading bar de toast de success
          8: "#018B62",
          9: "#BAF0D6",
          10: "#00966B", // Utilizado como texto de G-Pill
          11: "#CCF5B6", // Uilizado como bg de la pill de documento cargado en vista de summary de multitransaction
          12: "#22600C", // Uilizado como text de la pill de documento cargado en vista de summary de multitransaction
        },
        red: {
          // Nuevos
          50: "#FDF1F4",
          100: "#F8CBD2",
          200: "#F5B2BD",
          300: "#F18F9F",
          400: "#EE798C",
          500: "#EA586F",
          600: "#D55065",
          700: "#A63E4F",
          800: "#81303D",
          900: "#62252F",
          // Viejos
          1: "#FF647C",
          2: "#FFB1BD",
          3: "#FFEFF2",
          4: "#F6E6E6", // Utilizado como bg de toast de error
          5: "#A30101", // Utilizado como text y loading bar de toast de error y en el modal de migracion a Global Card (activo solo para usuarios Chile No GLobal Card)
          6: "#EA596F",
          7: "#59010E", // Utilizado como bg en G-Pill de error
          8: "#9F2336", // Utilizado como color de la pill de status en la vista de descarga de movimientos
        },
        yellow: {
          // Nuevos
          50: "#FFFAEE",
          100: "#FEEECB",
          200: "#FEE6B1",
          300: "#FDDB8E",
          400: "#FDD478",
          500: "#FCC956",
          600: "#E5B74E",
          700: "#B38F3D",
          800: "#8B6F2F",
          900: "#6A5424",
          // Viejos
          1: "#FFD153",
          2: "#FCE5A9",
          3: "#FFFAEE", // duplicado con warning-50 (nuevo) / Utilizado en el modal de alert de solicitud de datos
          4: "#F7F3E6", // Utilizado como bg del toast de warning
          5: "#CA9400", // Utilizado como text y loading bar de toast de warning y en el componente (deprecado) de GButtonOutlined
          7: "#E9B72D",
          6: "#B08A01",
          8: "#FCBB0A",
          9: "#5C4401", // Utilizado en el GPill de Warning
        },
        blue: {
          // Nuevos
          50: "#ecf0f9",
          100: "#c5d0ec",
          200: "#a9b9e3",
          300: "#8198d6",
          400: "#6985ce",
          500: "#4366c2",
          600: "#3d5db1",
          700: "#30488a",
          800: "#25386b",
          900: "#1c2b51",
          // Viejos
          1: "#2C4398",
          2: "#1433B4",
          3: "#2746C7",
          4: "#3F5EDF",
          5: "#869EFF",
          6: "#9DB0FF",
          7: "#4267B2",
          8: "#8891BD",
          9: "#6A75A9",
          10: "#CCD1EB",
          11: "#4F5694",
          12: "#6F75B8",
          13: "#8386C2",
          14: "#41477B",
          15: "#203478", // duplicado
          16: "#D9E7F6",
          17: "#3651C3",
          18: "#1A275E",
          19: "#343E68", // duplicado con gray-1 (deprecado)
          20: "#5F6881", // duplicado
          21: "#282C36", // duplicado
          22: "#343947", // duplicado con grey-800 (nuevo)
          23: "#ECEFFC",
        },
        // Todo el color debajo debe ser reemplazado y eliminado
        gray: {
          // Viejos
          1: "#343E68", // duplicado con blue-19 (deprecado)
          2: "#4F5A95",
          3: "#5D6EB5",
          4: "#8B97CB",
          5: "#9AA5D3",
          6: "#B3BDE5",
          7: "#D7DCF0",
          8: "#E1E5F5",
          9: "#F4F6FE",
          10: "#F5F7FF",
          11: "#FAFBFF", // duplicado con grey-25 (nuevo)
          12: "#ADADAD",
          13: "#9194A1", // probablemente se use en un componente inutilizado
          15: "#BFBFBF",
          16: "#9C9C9C",
          17: "#EBEBEB",
          18: "#E4E8F6",
          19: "#475694",
          20: "#D5DCF8",
          21: "#828AA4",
          22: "#E1E4F0",
          23: "#7F869A", // duplicado con grey-400 (nuevo)
          24: "#CDD0D8", // duplicado con grey-100 (nuevo)
        },
      },
      spacing: {
        none: "0rem",
        xxs: "0.25rem", // 4px
        xs: "0.5rem", // 8px
        sm: "0.75rem", // 12px
        md: "1rem", // 16px
        lg: "1.5rem", // 24px
        xl: "2rem", // 32px
        "2xl": "2.5rem", // 40px
        "3xl": "3rem", // 48px
        "4xl": "3.5rem", // 56px
        "5xl": "4rem", // 64px
      },
      gap: ({ theme }) => ({ ...theme("spacing") }),
      margin: ({ theme }) => ({ ...theme("spacing") }),
      padding: ({ theme }) => ({ ...theme("spacing") }),
      minHeight: ({ theme }) => ({
        ...theme("spacing"),
        "3/4": "75vh",
        "1/2": "50vh",
        "1/4": "25vh",
      }),
      minWidth: {
        "250px": "250px",
      },
      width: {
        fit: "fit-content",
      },
      maxWidth: {
        "1/5": "20%",
      },
      scale: {
        101: "1.01",
        102: "1.02",
        103: "1.03",
        104: "1.04",
      },
      screens: {
        "md-lg": "950px",
        "3xl": "1900px",
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        sm: "0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
        md: "0px 3px 6px 0px rgba(0, 0, 0, 0.16)",
        lg: "0px 5px 24px 0px rgba(0, 0, 0, 0.16)",
        xl: "0px 10px 30px 0px rgba(0, 0, 0, 0.30)",
      },
    },
    keyframes: {
      "ripple-expand": {
        from: { transform: "scale(0)", opacity: "1" },
        to: { transform: "scale(1.5)", opacity: "0" },
      },
      "ripple-contract": {
        from: { transform: "scale(1)", opacity: "1" },
        to: { transform: "scale(0)", opacity: "0" },
      },
      progress: {
        "0%": { backgroundPosition: "0 0" },
        "100%": { backgroundPosition: "32px 0" },
      },
      indeterminate: {
        "0%": { left: "-100%" },
        "100%": { left: "100%" },
      },
      "striped-flow": {
        "0%": { backgroundPosition: "-100%" },
        "100%": { backgroundPosition: "100%" },
      },
    },
    animation: {
      "ripple-expand": "ripple-expand 0.5s ease-out",
      "ripple-contract": "ripple-contract 0.5s ease-out",
      progress: "progress 1s linear infinite",
      "progress-indeterminate": "indeterminate 3s infinite",
      "progress-striped-flow": "striped-flow 3s linear infinite",
    },
  },
  variants: {
    extend: {
      opacity: ["hover", "focus", "active", "disabled"],
      backgroundColor: [
        "hover",
        "focus",
        "active",
        "disabled",
        "label-checked",
      ],
      borderColor: ["hover", "focus", "active", "disabled"],
      textColor: ["hover", "focus", "active", "disabled", "label-checked"],
      cursor: ["hover", "focus", "active", "disabled"],
      borderWidth: ["last"],
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        ":root": {
          "--color-primary": theme("colors.nightBlue.500"),
          "--color-primary-hover": theme("colors.nightBlue.700"),
          "--color-primary-press": theme("colors.nightBlue.400"),
          "--color-primary-disabled": theme("colors.grey.50"),
          "--color-disabled-light": theme("colors.grey.300"),
          "--color-success": theme("colors.green.700"),
          "--color-warning": theme("colors.yellow.700"),
          "--color-error": theme("colors.red.700"),
          "--color-info": theme("colors.blue.500"),
          "--color-bg-primary": theme("colors.grey.20"),
          "--color-bg-sec-default": theme("colors.white"),
          "--color-bg-sec-default-hover": theme("colors.grey.50"),
          "--color-bg-sec-default-press": theme("colors.grey.100"),
          "--color-bg-inverse": theme("colors.nightBlue.900"),
          "--color-bg-success": theme("colors.green.50"),
          "--color-bg-error": theme("colors.red.50"),
          "--color-bg-warning": theme("colors.yellow.50"),
          "--color-bg-info": theme("colors.blue.50"),
          "--color-icon-primary": theme("colors.nightBlue.900"),
          "--color-icon-secondary": theme("colors.grey.700"),
          "--color-icon-terciary": theme("colors.grey.500"),
          "--color-icon-disabled": theme("colors.grey.400"),
          "--color-icon-disabled-light": theme("colors.grey.300"),
          "--color-icon-inverse": theme("colors.white"),
          "--color-icon-success": theme("colors.green.700"),
          "--color-icon-error": theme("colors.red.700"),
          "--color-icon-warning": theme("colors.yellow.700"),
          "--color-icon-info": theme("colors.blue.500"),
          "--color-txt-primary": theme("colors.nightBlue.900"),
          "--color-txt-secondary": theme("colors.grey.700"),
          "--color-txt-terciary": theme("colors.grey.400"),
          "--color-txt-disabled": theme("colors.grey.500"),
          "--color-txt-disabled-light": theme("colors.grey.300"),
          "--color-txt-inverse": theme("colors.white"),
          "--color-txt-success": theme("colors.green.700"),
          "--color-txt-error": theme("colors.red.700"),
          "--color-txt-warning": theme("colors.yellow.700"),
          "--color-txt-info": theme("colors.blue.500"),
          "--color-border-primary": theme("colors.nightBlue.500"),
          "--color-border-secondary": theme("colors.nightBlue.900"),
          "--color-border-disabled": theme("colors.grey.500"),
          "--color-border-disabled-light": theme("colors.grey.300"),
          "--color-border-inverse": theme("colors.white"),
          "--color-border-success": theme("colors.green.700"),
          "--color-border-error": theme("colors.red.700"),
          "--color-border-warning": theme("colors.yellow.700"),
          "--color-border-info": theme("colors.blue.500"),
          "--color-progress-primary": theme("colors.everBlue.500"),
          "--color-progress-success": theme("colors.green.700"),
          "--color-progress-error": theme("colors.red.700"),
          "--color-progress-warning": theme("colors.yellow.700"),
        },
      });
    }),
    // plugin(({ addVariant }) => {
    //   addVariant('label-checked', () => {
    //     const yourSelector = 'input[type="radio"]'
    //     return `${yourSelector}:checked ~ .label-checked`
    //   })
    // })
  ],
} satisfies Config;
