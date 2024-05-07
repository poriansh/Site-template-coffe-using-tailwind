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
      padding: "1rem",
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
