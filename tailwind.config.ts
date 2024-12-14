import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#2A2A2A',
          darker: '#0B0B0B',
        },
        secondary: {
          white: '#FFFFFF',
        },
        neutral: {
          base: '#F6F2EF',
        },
        accent: {
          light: '#F6F2EF',
          blue: '#E7F1F8',
        },
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};

export default config;
