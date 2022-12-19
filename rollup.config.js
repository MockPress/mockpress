import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

const extensions = [".ts"];

export default [
  {
    input: "./src/index.ts",
    plugins: [
      nodeResolve({
        extensions,
      }),
      commonjs(),
      babel({
        extensions,
        babelHelpers: "bundled",
      }),
    ],
    external: ["nanoid"],
    output: [
      {
        file: "./dist/index.esm.mjs",
        format: "es",
      },
      {
        file: "./dist/index.cjs.js",
        format: "cjs",
      },
    ],
  },
];
