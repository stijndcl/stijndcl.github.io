/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			screens: {
				supportshover: { raw: "(hover: hover)" },
			},
		},
	},
	plugins: [],
};
