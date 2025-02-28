import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import pluginPrettier from "eslint-plugin-prettier"
import { fixupPluginRules } from "@eslint/compat"


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['**/node_modules', '**/*.config.*', '**/app-example']
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    plugins:
    {
      prettier: fixupPluginRules(pluginPrettier),
      react: fixupPluginRules(pluginReact)
    },

    languageOptions:
    { 
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module' 
    },

    rules: 
    {
      'camelcase': 'error',
      'new-cap': 'error',

      'react/no-unknown-property': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'error',

      '@typescript-eslint/no-unused-vars':
      [
        'error',
        {
          'argsIgnorePattern': '^_'
        }
      ],

      'prettier/prettier' : [
        'error',
        {
          printWidth: 100,
          tabWidth: 2,
          singleQuote: false,
          trailingComma: 'none',
          semi: false,
          endOfLine: 'auto'
        }
      ]
    },
  },
  
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended
];