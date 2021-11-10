module.exports = {
  // mode: "jit",
  // purge: [
  //   './public/**/*.html',
  //   './src/**/*.{js,jsx,ts,tsx,vue}',
  // ],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
