/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        "poppins" : ["Poppins", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
}

