/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
                primary: "#344785",
                secondary: "#6e86b0",
                panel: "#dde0de", 
                gray: {
                  400: "#777",
                  500: "#555",
                  600: "#8F919A",
                },
                white: {
                  0: "#FFFFFF",
                  10: "#FDFDFD",
                  20: "#FBFBFB",
                  30: "#F9F9F9",
                  40: "#F9F9F9",
                  50: "#F8F9FA",
                  100: "#F7F8F8",
                  200: "#F5F6F7",
                },
                blue: {
                  50: "#F0F2F7",
                  100: "#A5B7D4"
                },
            }
    },
  },
  plugins: [],
}

