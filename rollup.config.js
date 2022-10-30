import { babel } from "@rollup/plugin-babel";

export default [
  {
    input: "./src/index.js",
    output: {
      format: "cjs",
      file: "./dist/commonjs/bundle.cjs",
      sourcemap: true,
    },
    plugins: [babel({ babelHelpers: "bundled" })],
  },
  {
    input: "./src/index.js",
    output: {
      format: "es",
      file: "./dist/esm/bundle.mjs",
      sourcemap: true,
    },
    plugins: [babel({ babelHelpers: "bundled" })],
  },
];
