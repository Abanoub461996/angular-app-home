module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
      "./node_modules/flowbite/**/*.js" // add this line
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
};