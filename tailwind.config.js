/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#202020',
          'secondary': '#121212',
          'accent': '#f87171',
          'neutral': '#000000',
          'base-100': '#121212',
          'info': '#ffffff',
          'success': '#a6e3a1',
          'warning': '#f9e2af',
          'error': '#ffffff',
        },
      },
    ],
  },
}
