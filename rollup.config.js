export default [
  {
    input: "./src/index.js",
    output: {
      format: "cjs",
      file: "./dist/commonjs/bundle.cjs",
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
