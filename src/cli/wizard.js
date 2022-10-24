import path from "path";
import fs from "fs";

const options = [
  {
    name: "mocking-js-file",
    type: "file",
    description: "Path to mocking js file",
    default: "index.js",
    coerce: coercePath,
    validate: validateFile,
  },
  {
    name: "input",
    type: "file",
    description: "Path to mock data export file",
    default: "export.json",
    coerce: coercePath,
    validate: validateFile,
  },
];

export const getConfig = async (argv) => {
  const program = parseCommandLine(unaliasedArgv);

  let answers;
  if (program.wizard) {
    console.log("\nStarting wizard...");
    const questions = options.map((option) => ({
      when: option.name !== "wizard" && !option.isProvided,
      name: camelcase(option.name),
      type: option.prompt,
      message: option.description + "?",
      default: option.default,

      // these are not used for all option types and that's fine
      filter: option.coerce,
      validate: option.validate,
    }));
    answers = await inquirer.prompt(questions);
  } else {
    console.log("\nSkipping wizard...");
    answers = {};
  }

  const config = { ...program.opts(), ...answers };
  return config;
};

function coercePath(value) {
  return path.normalize(value);
}

function validateFile(value) {
  let isValid;
  try {
    isValid = fs.existsSync(value) && fs.statSync(value).isFile();
  } catch (ex) {
    isValid = false;
  }

  return isValid ? true : "Unable to find file: " + path.resolve(value);
}
