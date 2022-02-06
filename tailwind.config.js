module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-purple': {
          DEFAULT: "#7E33E0"
        },
        'app-h1': {
          DEFAULT: "#101750"
        },
        'app-text-secondary': {
          DEFAULT: "#151875"
        },
        'app-main-bg': {
          DEFAULT: "#F2F0FF"
        },
        'app-secondary-bg': {
          DEFAULT: "#9DA0AE"
        },
        'app-light-bg': {
          DEFAULT: "#F9F8FE"
        },
        'app-btn-primary': {
          DEFAULT: "#FB2E86"
        }
      }
    },
  },
  plugins: [],
}