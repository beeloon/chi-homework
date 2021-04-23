import { resolve } from "path";
import { existsSync, writeFileSync, readFileSync, mkdirSync } from "fs";

export const getFileContentSync = (path, filename) => {
  const pathToFile = resolve(path, `${filename}.json`);

  try {
    const fileContent = readFileSync(pathToFile).toString();

    return JSON.parse(fileContent);
  } catch (err) {
    throw new Error(err);
  }
};

export const setFileContentSync = (path, filename, content) => {
  const pathToFile = resolve(path, `${filename}.json`);

  try {
    writeFileSync(pathToFile, content);
  } catch (err) {
    throw new Error("The file doesn't exist.");
  }
};

export const initializeFileSync = (path, file, ext) => {
  const fileName = `${file}.${ext}`;
  const filePath = resolve(path, fileName);

  if (!existsSync(filePath)) {
    writeFileSync(filePath, "[]");
  }
};

export const initializeDirectorySync = (path) => {
  const pathToDir = resolve(path);

  if (!existsSync(pathToDir)) {
    mkdirSync(pathToDir);
  }
};
