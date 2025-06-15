import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import js from "@eslint/js";

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,

  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  eslintConfigPrettier,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
    ignores: ["node_modules", "dist", "public", ".vscode", ".astro"],
  },
];
