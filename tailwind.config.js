/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js",
  ],
  theme: { 
    fontFamily: {
      "custom": ['"Press Start 2P"', "sans-serif"]
    },
    extend: {
      backgroundImage: {
        'mario-pattern': "url('/media/bg/pagePattern.jpg')",
      }
    },
  },
  plugins: [],
}

