import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import typescriptESLint from "typescript-eslint";

/** @type { import("eslint").Linter.ConfigType[] } */
export default typescriptESLint.config(
	eslint.configs.recommended,
	...typescriptESLint.configs.recommended,
	...svelte.configs["flat/recommended"],
	prettier,
	...svelte.configs["flat/prettier"],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		files: ["**/*.svelte"],
		languageOptions: {
			parserOptions: {
				parser: typescriptESLint.parser,
			},
		},
	},
	{
		ignores: ["*.cjs", "**/.DS_Store", "node_modules/*", "build/*", ".svelte-kit/*", "package/*"],
	}
);
