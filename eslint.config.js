import eslint from '@eslint/js';
import react from 'eslint-plugin-react';
import globals from 'globals';

export default [
    {
        // if ignores is used without any other keys in the configuration object, then the patterns act as global ignores // https://github.com/eslint/eslint/discussions/17429
        // only global ignores patterns can match directories
        ignores: ['**/node_modules/*', '**/dist/*', '**/build/*', '**/coverage/*', '**/tests/*', '**/.git/*', '**/.next/*'],
    },
    eslint.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            react,
        },
        rules: {
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
        ignores: ['jsconfig.json', 'tsconfig.json', '*.min.js'],
    },
];
