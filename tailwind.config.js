/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "linear-gradient(91.47deg, #DA458F -6%, #DA34DD 113.05%)",
      },
    },
  },
  plugins: [],
};
