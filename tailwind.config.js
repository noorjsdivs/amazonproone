/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx.tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: "#131921",
        amazon_light: "#232F3E",
        quantity_box: "#F0F2F2",
        footerBottom: "#131A22",
      },
      fontFamily: {
        titleFont: "Roboto",
        bodyFont: "Poppins",
      },
      fontSize: {
        footerFont: "14px",
        footerBottom: "16px",
      },
      borderWidth: {
        borderThin: "1px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
