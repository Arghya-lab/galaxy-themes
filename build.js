const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

// Define the output file name with the .flex extension
const outputFilePath = path.join(__dirname, "galaxy.flex");

// Create a file stream for the output
const output = fs.createWriteStream(outputFilePath);

// Initialize the archiver
const archive = archiver("zip", { zlib: { level: 9 } });

// Handle stream events
output.on("close", () => {
  console.log(
    `Archive created: ${outputFilePath} (${archive.pointer()} total bytes)`
  );
});

archive.on("error", (err) => {
  throw err;
});

// Pipe the archive to the output stream
archive.pipe(output);

// Add the `src` folder (include the folder and its contents)
const srcFolderPath = path.join(__dirname, "src");
if (fs.existsSync(srcFolderPath) && fs.lstatSync(srcFolderPath).isDirectory()) {
  archive.directory(srcFolderPath, false);
} else {
  console.warn("src folder does not exist.");
}

// Finalize the archive
archive.finalize();
