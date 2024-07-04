/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			opacity: {
				10: "0.1",
				90: "0.9",
			},
			borderOpacity: {
				10: "0.1",
				50: "0.5",
				90: "0.9",
			},
		},
	},
	plugins: [],
};
