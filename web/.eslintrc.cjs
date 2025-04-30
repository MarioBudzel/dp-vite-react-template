/* module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'react-hooks'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/prop-types': 0,
    'react/jsx-key': 'off',
    'react-hooks/rules-of-hooks': 'error'
  }
}; */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended' // ✅ TypeScript rules
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser', // ✅ TypeScript parser
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'react-hooks', '@typescript-eslint'], // ✅ Add TypeScript plugin
  rules: {
    'react/display-name': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/prop-types': 0,
    'react/jsx-key': 'off',
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/no-unused-vars': ['warn'], // ✅ Warn for unused variables in TS
    '@typescript-eslint/explicit-module-boundary-types': 'off' // ✅ Disable forcing return types
  }
};
