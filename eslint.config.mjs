import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    // Explicitly define parser and parserOptions
    parser: "@babel/eslint-parser", // Use Babel parser for JavaScript or replace with "@typescript-eslint/parser" for TypeScript
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      requireConfigFile: false, // For @babel/eslint-parser, if no Babel config exists
    },
    env: {
      browser: true,
      node: true,
      es2020: true,
    },
    rules: {
      // Add custom rules if needed
    },
  },
];

export default eslintConfig;