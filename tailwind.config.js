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
        'mario-background-desktop': "url('/media/bg/backgroundDesktop.jpg')",
        'mario-background-mobile': "url('/media/bg/backgroundMobile.jpg')"
      }
    },
  },
  plugins: [],
}

