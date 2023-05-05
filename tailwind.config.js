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
      purple: '#5B151A',
      lime: '#768842',
      sky: '#1F283F',
      amber: '#DFD2BA',
      grey: '#404040'
    },

    screens: {
      'celp': {'max': '375px'},
      // => @media (min-width: 640px) { ... }

      'celg': {'max': '480px'},
      // => @media (min-width: 768px) { ... }

      'tablet': {'max': '768px'},
      // => @media (min-width: 1024px) { ... }

      'deskp': {'max': '1024px'},
      // => @media (min-width: 1280px) { ... }

      'deskg': {'max': '1440px'},
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
