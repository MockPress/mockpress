import path from "path";
import fs from "fs";
import { AS_JSON } from "./constants.js";

const writeFile = (directoryPath, filename, data, as = AS_JSON) => {
  const destinationPath = path.join(directoryPath, filename);
  const stringData = transform(data, as);
  return fs.promises
    .mkdir(path.dirname(destinationPath), { recursive: true })
    .then(() => fs.promises.writeFile(destinationPath, stringData))
    .catch((err) => {
      console.error(err);
    });
};

const transform = (data, as) => {
  if (as === AS_JSON) {
    return JSON.stringify(data);
  }
  return "no data";
};

export default writeFile;
