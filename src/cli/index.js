import wizard from "./wizard";

(async () => {
  // node version check
  const requiredVersion = "12.20.0"; // for command and inquirer (using esm)
  const currentVersion = process.versions.node;
  if (compareVersions(currentVersion, requiredVersion) === -1) {
    throw `This script requires Node v${requiredVersion} or higher, but you are using v${currentVersion}.`;
  }

  // parse any command line arguments and run wizard
  const config = await wizard.getConfig(process.argv);

  // parse data from XML and do Markdown translations
  const posts = await parser.parseFilePromise(config);

  // write files, downloading images as needed
  await writer.writeFilesPromise(posts, config);

  // happy goodbye
  console.log("\nAll done!");
  console.log("Look for your output files in: " + path.resolve(config.output));
})().catch((ex) => {
  // sad goodbye
  console.log("\nSomething went wrong, execution halted early.");
  console.error(ex);
});
