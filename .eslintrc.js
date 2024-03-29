// const packageJSON = require('./package.json');
// const projects = packageJSON.workspaces.packages;
// const tsEslintProjects = projects.map((project) => `./${project}/tsconfig.json`);

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  settings: {
    linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    // it looks like setting this to undefined increases performance and prevents memory leak:))
    // they say doing this causes type based rules to not work but they are working so far!
    project: undefined,
  },
  plugins: [
    '@typescript-eslint',
    'prefer-arrow',
    'unicorn',
    'import',
    'jest',
    'jsdoc',
    'prettier',
  ],
  extends: [
    'plugin:jsdoc/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  rules: {
    // enabled typescript rules
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/typedef': [
      'error',
      {
        arrowParameter: false,
        propertyDeclaration: false,
        memberVariableDeclaration: false,
      },
    ],

    // disabled typescript specific rules
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        overrides: {
          constructors: 'off',
        },
      },
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-use-before-declare': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/type-annotation-spacing': 'off',

    // enabled eslint rules
    'unicorn/explicit-length-check': 'error',
    'constructor-super': 'error',
    curly: ['error', 'multi-line'],
    'dot-notation': 'error',
    'guard-for-in': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    'no-useless-return': 'error',
    'max-classes-per-file': ['error', 1],
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-empty': 'error',
    'no-empty-function': ['error', { allow: ['constructors'] }],
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'use-isnan': 'error',
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      { singleReturnOnly: true, classPropertiesAllowed: true },
    ],
    'no-unused-expressions': 'error',
    'no-shadow': 'error',
    'no-new-func': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-unresolved': [
      'error',
      { ignore: ['\\$.*$'] }, // all our aliases start with a $ sign
    ],
    'spaced-comment': 'error',

    // disabled eslint rules
    'arrow-body-style': 'off', // TODO: this may be improved
    'arrow-parens': ['off', 'as-needed'],
    complexity: 'off',
    'eol-last': 'off',
    'linebreak-style': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': 'off',
    'one-var': 'off',
    'quote-props': 'off',
    'space-before-function-paren': 'off',
    'valid-typeof': 'off',
    camelcase: ['error', { properties: 'never' }],
    eqeqeq: ['error', 'smart'],
    'prefer-arrow-callback': 'error',

    // jsdoc rules
    'jsdoc/require-jsdoc': 0,
    'jsdoc/require-param': 0,
    'jsdoc/require-param-type': 0,
    'jsdoc/require-returns-type': 0,
    'jsdoc/newline-after-description': 0,

    // unsupported rules
    // TODO: please refer to https://github.com/typescript-eslint/typescript-eslint/blob/90b36ddac2f6de006fd59f2a9234df1eb2d1606e/packages/eslint-plugin/ROADMAP.md
    // 'object-shorthand-properties-first'
    // 'no-reference-import'
    // 'no-boolean-literal-compare'
    // 'function-name'
    // '@typescript-eslint/no-param-reassign': 'error',
    // '@typescript-eslint/no-triple-slash-reference': 'error',
    // '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
    // TODO: I don't know if following are supported
    // tslint-consistent-codestyle
    // tslint-eslint-rules
    // tslint-microsoft-contrib
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': 'error',
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
      },
    },
    {
      files: ['*.test.ts', '*.e2e-test.ts'],
      extends: ['plugin:jest-formatting/recommended'],
      env: {
        'jest/globals': true,
      },
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-alias-methods': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-test-callback': 'warn',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/prefer-spy-on': 'error',
        'jest/valid-expect': 'error',
        'jest/consistent-test-it': 'error',
        'jest/expect-expect': 'error',
        'jest/no-duplicate-hooks': 'warn',
        'jest/no-export': 'error',
        'jest/no-if': 'error',
        'jest/no-mocks-import': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/no-try-expect': 'error',
        'jest/prefer-called-with': 'warn',
        'jest/prefer-hooks-on-top': 'warn',
        'jest/prefer-to-contain': 'warn',
        'jest/require-top-level-describe': 'error',
        'jest/require-to-throw-message': 'warn',
        'jest/valid-describe': 'error',
        'jest/valid-title': 'error',
      },
    },
  ],
};
