/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tw-cyan": "hsl(172, 67%, 45%)",
        "tw-dark-cyan": "hsl(183, 100%, 15%)",
        "tw-dark-grayish-cyan": "hsl(186, 14%, 43%)",
        "tw-grayish-cyan": "hsl(184, 14%, 56%)",
        "tw-light-grayish-cyan": "hsl(185, 41%, 84%)",
        "tw-very-light-grayish-cyan": "hsl(189, 41%, 97%)",
        "tw-white": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
