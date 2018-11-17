# eslint-config-typesafe-es

ESLint configuration to enforce coding patterns used by TypeScript compiler type inference to
achieve type safe(ish) JavaScript.

Read full exaplanation at: [Making JavaScript type-safe(ish) for free](https://www.mikkotikkanen.com/articles/making-javascript-type-safe(ish)-for-free/)


## Installation

Install ESLint and type-safe-es configuration preset (plus, it’s peer dependencies):

```bash
npm install eslint eslint-config-type-safe-es eslint-plugin-jsdoc --save-dev
```


## Configuration

Add `.eslintrc.json` that extends the typesafe-es configuration

```json
{
  "extends": ["typesafe-es"]
}
```

__Note:__ If you are using typesafe-es in combination with other configurations, such as
`airbnb-base`, make sure `typesafe-es` is set as last since other configurations might turn some
rules off by default. (Example: `"extends": ["airbnb-base", "typesafe-es"]`)

To get the full type safe JS configuration and setup, read more at the link up above.
