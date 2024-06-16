/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        veryDarkBlueBg: "hsl(207, 26%, 17%)",
        veryDarkBlueText: "hsl(200, 15%, 8%)",
        veryLightGrayBg: "hsl(0, 0%, 98%)",
        darkBlueElement: "hsl(209, 23%, 22%)",
        white: "hsl(0, 0%, 100%)",
        darkWhite: "hsl(0, 0%, 75%)",
        lightDarkWhite: "hsl(0, 0%, 50%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
