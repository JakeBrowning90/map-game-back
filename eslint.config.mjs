import globals from "globals";
import pluginJs from "@eslint/js";

export default [ {
    env: {browser: true, node: true, },
    files: ["**/*.js"], languageOptions: {sourceType: "script"},
    languageOptions: { globals: globals.browser, ecmaVersion: latest },
  },
  pluginJs.configs.recommended,
];