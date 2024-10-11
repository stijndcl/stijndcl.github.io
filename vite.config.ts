import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";
import svg from "@poppanator/sveltekit-svg";

const config: UserConfig = {
	plugins: [
		sveltekit(),
		svg({
			includePaths: ["./src/assets/icons"],
			svgoOptions: {
				plugins: [
					{
						name: "preset-default",
						params: {
							overrides: {
								cleanupIds: false,
							},
						},
					},
				],
			},
		}),
	],
};

export default config;
