/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'md': {'max': '767px'},
      'lg': {'max': '1024px'},
      'xl': {'max': '1320px'},
      'sm': {'max': '980px'},
    },

    extend: { 
      backgroundImage: {
        "header": "url('./assets/bg.jpg')",
        "dev": "url('./assets/developer.jpg')",
        "apae": "url('./assets/project1.png')",
        "pjirmaoanimal" : "url('./assets/pjirmaoanimal.png')"
      },
      colors: {
        'black-rgba': 'rgba(0,0,0, 0.64)'
      }
    },
  },
  plugins: [],
}

