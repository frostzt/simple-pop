const test = process.env.NODE_ENV === "test";
const loose = true;

module.exports = {
  presets: [
    [
      "@babel/env",
      {
        loose,
        modules: test ? "commonjs" : false,
      },
    ],
    "@babel/react",
    "@babel/typescript",
  ],
  plugins: [
    "@babel/transform-runtime",
    ["@babel/proposal-object-rest-spread", { loose }],
  ],
};
