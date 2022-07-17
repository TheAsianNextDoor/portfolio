/** @type {import ('eslint').ESLint.ConfigData} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['airbnb', 'plugin:import/recommended', 'plugin:prettier/recommended'],
  rules: {
    // misc
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { peerDependencies: ['**/*.test.js', '**/*.spec.js'] }],

    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', ['internal', 'parent', 'sibling'], 'unknown', 'object', 'type'],
      },
    ],
  },
  settings: {
    react: {
      version: '16.14.0',
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.eslint.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended', // must be at bottom of list
      ],
      rules: {
        // react
        'react/jsx-filename-extension': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': [
          'error',
          { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',

        // typescript
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/consistent-type-imports': 'error',

        // misc
        'import/no-unresolved': 'error',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': ['error', { peerDependencies: ['**/*.test.js', '**/*.spec.js'] }],
        'no-param-reassign': 'off', // services use immer for object construction

        'import/order': [
          'error',
          {
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            pathGroups: [
              {
                pattern: '*.scss',
                group: 'builtin',
                patternOptions: { matchBase: true },
                position: 'before',
              },
            ],
            'newlines-between': 'always',
            groups: ['builtin', 'external', ['internal', 'parent', 'sibling'], 'unknown', 'object', 'type'],
          },
        ],

        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'react',
                importNames: ['default'],
                message: 'React default is automatically imported by webpack.',
              },
            ],
          },
        ],
      },
      settings: {
        react: {
          version: '16.14.0',
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: './tsconfig.eslint.json',
          },
        },
      },
    },
  ],
};
