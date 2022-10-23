export default [
  {
    input: "./src/index.js",
    output: {
      format: "cjs",
      file: "./dist/commonjs/bundle.js",
      sourcemap: true,
    },
  },
  {
    input: "./src/index.js",
    output: {
      format: "es",
      file: "./dist/esm/bundle.mjs",
      sourcemap: true,
    },
  },
];
