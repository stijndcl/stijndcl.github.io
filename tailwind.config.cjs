/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				"lighthouseOrange": "#fd8237"
			},
			screens: {
				supportshover: { raw: "(hover: hover)" },
			},
		},
	},
	plugins: [],
};
