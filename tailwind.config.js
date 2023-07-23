/** @type {import('tailwindcss').Config} */
export const content = [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
  "./app.vue",
];
export const safelist = [
    {
      pattern: /text-(red|emerald|blue|cyan|teal|orange|amber|violet)-(500)/,
    },
    {
      pattern: /border-(red|emerald|blue|cyan|teal|orange|amber|violet)-(500)/,
    }, 
    {
      pattern: /bg-(red|emerald|blue|cyan|teal|orange|amber|violet)-(500)/,
    },
  ];

export const theme = {
  extend: {
    colors:{
      secondary: '#1dbbc3',
      tertiary: '#f7fcfd'
    },
    fontSize: {
    'fs-200': 'clamp(0.78rem, calc(0.71rem + 0.35vw), 0.96rem)',
    'fs-300': 'clamp(0.94rem, calc(0.84rem + 0.51vw), 1.2rem)',
    'fs-400': 'clamp(1.13rem, calc(0.98rem + 0.73vw), 1.5rem)',
    'fs-500': 'clamp(1.94rem, calc(1.56rem + 1.92vw), 2.93rem)',
    'fs-600': 'clamp(2.8rem, calc(2.11rem + 3.47vw), 4.58rem)',
    }
  },
  container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xl: '2rem',
      }
    },
};
export const plugins = [];

