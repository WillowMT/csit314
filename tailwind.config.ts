import type { Config } from "tailwindcss";

import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        brand:
        {
          50: '#fbf1e7',
          100: '#e4d8ce',
          200: '#cebfb0',
          300: '#baa592',
          400: '#a58b73',
          500: '#8d725a',
          600: '#6d5945',
          700: '#4f3f31',
          800: '#30261b',
          900: '#150c00',
        }
      }
    },
  },
  darkMode: "class",
  plugins: [require("tailwindcss-animate"), nextui({})],
};
export default config;
