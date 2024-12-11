export default {
  env: {},
  presets: [
    '@babel/env',
    [
      '@babel/typescript',
      {
        jsxPragma: 'h',
      },
    ],
  ],
  plugins: [
    [
      '@babel/transform-react-jsx',
      {
        pragma: 'h',
      },
    ],
  ],
};
