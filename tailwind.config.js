/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
				primary: "#326B6B",
				secondary: "#DCE8E8",
      },
      fontSize: {
				xs: "0.75rem",
				sm: "0.875rem",
				base: "1rem",
				lg: "1.125rem",
				xl: "1.5rem",
        14: "14px",
        16: "16px",
				"2xl": "2.5rem",
				"4xl": "4rem",
			},
			boxShadow: {
				primaryBtnShadow: "0 5px #00a69b",
				card: "0px 4px 200px #F4F6F9",
			},
      borderRadius: {
				8: "8px",
        10: "10px",
        12: "12.26px",
        18: "18.34px"
			},
      width: {
        19: "19px",
        35: "35px",
        45: "45px",
        85: "85px",
        95: "95px",
        160: "160px",
        170: "170px",
        188: "188px",
        200: "200px",
      },
      height: {
        19: "19px",
        35: "35px",
        45: "45px",
        85: "85px",
        95: "95px",
        160: "160px",
        170: "170px",
        188: "188px",
        200: "200px",
      },
      maxWidth: {
				default: "1078px",
        994: "994px",
			},
      backgroundImage: {
        heroBg: "linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/jpg/bg/hero-bg.jpg)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
