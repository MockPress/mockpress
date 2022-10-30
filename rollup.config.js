import path from "path";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";

export default [
  {
    input: "./src/index.js",
    plugins: [
      getBabelOutputPlugin({
        presets: ["@babel/preset-env"],
      }),
    ],
    external: ["nanoid"],
    output: [
      {
        dir: "./dist/esm",
        format: "es",
        preserveModules: true,
      },
      {
        file: "./dist/cjs/bundle.cjs",
        format: "cjs",
      },
    ],
  },
];
