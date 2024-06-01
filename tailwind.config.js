/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  darkMode: "class",
  theme: {
    boxShadow: {
      light: "0px 1px 10px 0px #0000000D",
    },
    fontFamily: {
      Dana: "Dana",
      "Dana-medium": "Dana Medium",
      "Dana-bold": "Dana Bold",
      Moraba: "Moraba",
      "Moraba-medium": "Moraba Medium",
      "Moraba-bold": "Moraba Bold",
    },
    container: {
      center: true,
      padding:{
        DEFAULT:"1rem",
        lg:"0.625rem",
      },
    },
    screens: {

      'xs':'480px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      spacing: {
        30: "7.5rem",
      },
      backgroundImage:{
        "home-mobail":"url(../img/headerBgMobile.webp)",
        "home-desktop":"url(../img/headerBgDesktop.webp)"

      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant("grandchild", "& > * > * ");
      addVariant("grandchild-hover", "& > * > *:hover ");
    },
  ],
};
