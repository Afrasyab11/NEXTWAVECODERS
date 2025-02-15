/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(90deg, rgba(100, 78, 222, 1) 0%, rgba(23, 78, 88, 0.5) 29.08%, rgba(2, 11, 30, 0.5) 59.38%, rgba(2, 11, 30, 0.5) 89.68%, rgba(2, 11, 30, 0.5) 114.73%)",
        'right-threebox': "url('/src/assets/images/rightThreebox.svg')"

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"rgb(8 7 20)",
        secondary:"#644EDE",
        "semi-primary":'rgb(13 8 36)',
        'custom-gradient': "linear-gradient(90deg, rgba(100, 78, 222, 1) 0%, rgba(23, 78, 88, 0.5) 29.08%, rgba(2, 11, 30, 0.5) 59.38%, rgba(2, 11, 30, 0.5) 89.68%, rgba(2, 11, 30, 0.5) 114.73%)",
        
      },
      screens:{
        sm:"320px"
      }
    },
  },
  plugins: [],
};
