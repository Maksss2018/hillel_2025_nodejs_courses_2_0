import { dirname } from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";
import Ajv from "ajv";
import { schemaGoods } from "./models/schemaGoods.js";

const ajvValidator = new Ajv();

const validate = ajvValidator.compile(schemaGoods);

const __dirname = dirname(fileURLToPath(import.meta.url));

async function readJSON(pathToFile) {
  try {
    const data = await readFile(pathToFile, "utf8");
    const parsedData = JSON.parse(data);
    console.dir(parsedData);
    validateJSON(parsedData);
  } catch (err) {
    console.log(err);
  }
}

const validateJSON = function (data) {
  if (validate(data)) {
    console.log("Validation OK");
  } else {
    console.log("Validation failed");

    // вивід помилок
    console.log(validate.errors);

    validate.errors.forEach((err) => {
      console.log(`Path: ${err.instancePath || "/"} — ${err.message}`);
    });
  }
};

readJSON(__dirname + "/goods.json");
