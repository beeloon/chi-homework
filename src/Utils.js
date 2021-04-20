import { resolve, basename } from "path";
import { access, mkdir, writeFile, readFile } from "fs/promises";

export const getFileContent = async (path, filename) => {
  const pathToFile = resolve(path, `${filename}.json`);

  try {
    const fileContent = await readFile(pathToFile, "utf-8");

    return JSON.parse(fileContent);
  } catch (err) {
    console.error(err);
  }
};

export const setFileContent = async (path, filename, content) => {
  const pathToFile = resolve(path, `${filename}.json`);

  try {
    await writeFile(pathToFile, content);
  } catch (err) {
    console.error(err);
  }
};

export const initializeDirectory = async (path) => {
  const pathToDir = resolve(path);
  const dirName = basename(pathToDir);

  try {
    await access(pathToDir);
    console.log(`Directory [${dirName}] already exist`);
  } catch (err) {
    await mkdir(pathToDir);
    console.log(`Directory [${dirName}] was created`);
  }
};

export const initializeFile = async (pathToDir, file, ext) => {
  const fileName = `${file}.${ext}`;
  const filePath = resolve(pathToDir, fileName);

  try {
    await access(filePath);
    console.log(`File [${fileName}] already exist`);
  } catch (err) {
    await writeFile(filePath, "[]");
    console.log(`File [${fileName}] was created`);
  }
};
