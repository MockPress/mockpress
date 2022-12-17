import { nodeResolve } from "@rollup/plugin-node-resolve";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";

export default [
  {
    input: "./src/index.js",
    plugins: [
      getBabelOutputPlugin({
        presets: ["@babel/preset-env"],
      }),
      nodeResolve(),
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
