/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Archivo, sans-serif'
      }
    },
    fontFamily:{
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
      '4xl': 48,
    },

    colors:{
      transparent: 'transparent',
      white: '#FFF',
      black: '#000',
      blacklight: '#00000010', 
      blackdark: '#00000070', 
      blackmedium: '#00000040', 
      whitelight: '#FFFFFF10', 
      whitedark: '#FFFFFF70', 
      whitemedium: '#FFFFFF40', 
    }
  },
  plugins: [],
}
