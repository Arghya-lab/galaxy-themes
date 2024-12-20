import fs from "fs";
import path from "path";
import archiver from "archiver";
import { fileURLToPath } from "url";

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Add the `themes` folder (include the folder and its contents)
const themesFolderPath = path.join(__dirname, "themes");
if (
  fs.existsSync(themesFolderPath) &&
  fs.lstatSync(themesFolderPath).isDirectory()
) {
  archive.directory(themesFolderPath, false);
} else {
  console.warn("themes folder does not exist.");
}

// Finalize the archive
archive.finalize();
