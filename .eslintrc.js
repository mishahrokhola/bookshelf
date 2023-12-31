/**
 * @type { import('eslint').ESLint.Options }
 */
module.exports = {
	root: true,
	ignorePatterns: ['*.js'],
	overrides: [
		{
			files: ['*.ts'],
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
				project: ['tsconfig.json'],
				createDefaultProgram: true,
			},
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:@angular-eslint/recommended',
				'plugin:@angular-eslint/template/process-inline-templates',
				'plugin:prettier/recommended',
			],
			plugins: ['prettier', '@typescript-eslint', '@angular-eslint', 'max-params-no-constructor'],
			rules: {
				/* General */
				'no-unused-vars': 'off',
				'require-await': ['error'],
				'no-return-await': ['error'],
				'object-shorthand': ['error', 'always'],
				'prettier/prettier': ['error'],
				'max-nested-callbacks': ['error', 2],
				'no-console': ['error', { 'allow': ['warn', 'error'] }],
				'max-params-no-constructor/max-params-no-constructor': ['error', 3],

				/* Custom error */
				'no-restricted-syntax': [
					'error',

					// ban "this" in static methods
					{
						'selector': 'MethodDefinition[static = true] ThisExpression',
						'message': 'Unexpected "this" in static method. Use class name instead.',
					},
				],

				/* Typescript */
				'@typescript-eslint/no-unused-vars': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/await-thenable': 'error',
				'@typescript-eslint/no-confusing-void-expression': ['error', { 'ignoreArrowShorthand': true }],
				'@typescript-eslint/array-type': ['error', { 'default': 'array-simple' }],
				'@typescript-eslint/explicit-function-return-type': ['error', { 'allowExpressions': true }],
				'@typescript-eslint/ban-ts-comment': [
					'error',
					{
						'ts-ignore': 'allow-with-description',
						'ts-expect-error': 'allow-with-description',
						'minimumDescriptionLength': 10,
					},
				],

				// Public/private modifiers
				'@typescript-eslint/explicit-member-accessibility': [
					'error',
					{ 'overrides': { 'constructors': 'no-public' } }, // constructor is an exeption
				],

				// Order
				'@typescript-eslint/member-ordering': [
					'error',
					{
						interfaces: {
							memberTypes: ['field', 'method'],
							order: 'alphabetically',
						},

						typeLiterals: {
							memberTypes: ['field', 'method'],
							order: 'alphabetically',
						},

						classes: [
							// Static fields
							'public-static-field',
							'protected-static-field',
							'private-static-field',

							// Decorated fields
							'public-decorated-field',
							['public-decorated-get', 'public-decorated-set'],

							'protected-decorated-field',
							['protected-decorated-get', 'protected-decorated-set'],

							'private-decorated-field',
							['private-decorated-get', 'private-decorated-set'],

							// Other fields
							'public-field',
							'protected-field',
							'private-field',

							'field',

							// Constructor
							'constructor',

							// Getters and setters
							['public-get', 'public-set'],
							['protected-get', 'protected-set'],
							['private-get', 'private-set'],
							['get', 'set'],

							// Methods
							'public-method',
							'public-decorated-method',

							'protected-decorated-method',
							'protected-method',

							'private-decorated-method',
							'private-method',

							'method',
							'decorated-method',

							['public-static-get', 'public-static-set'],
							['protected-static-get', 'protected-static-set'],
							['private-static-get', 'private-static-set'],

							'public-static-method',
							'protected-static-method',
							'private-static-method',
						],
					},
				],

				'@typescript-eslint/naming-convention': [
					'error',

					// All enum keys should be in PascalCase
					{ 'selector': ['enumMember'], 'format': ['PascalCase'] },
				],

				/* Angular */
				'@angular-eslint/prefer-on-push-component-change-detection': 'error',
				'@angular-eslint/no-host-metadata-property': 'off',
			},
		},
		{
			files: ['*.html'],
			extends: ['plugin:@angular-eslint/template/recommended'],
			rules: {},
		},
	],
};
