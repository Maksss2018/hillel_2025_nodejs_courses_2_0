import { dirname } from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function readJSON(pathToFile) {
  try {
    const data = await readFile(pathToFile, "utf8");
    const parsedData = JSON.parse(data);
    console.dir(parsedData);
  } catch (err) {
    console.log(err);
  }
}

readJSON(__dirname + "/goods.json");
