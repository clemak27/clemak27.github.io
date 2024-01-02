/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1e1e2e",
          "secondary": "#313244",
          "accent": "#f87171",
          "neutral": "#181825",
          "base-100": "#11111b",
          "info": "#ffffff",
          "success": "#a6e3a1",
          "warning": "#f9e2af",
          "error": "#ffffff",
        },
      },
    ],
  },
}
