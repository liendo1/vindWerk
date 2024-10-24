/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      padding: {
        '7px': '7px',
        '2px': '2px',
        '64px': '64px',
      },
      height: {
        '41px': '41px',
      },
      width: {
        '1312px': '1312px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

