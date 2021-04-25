import { resolve } from "path";
import { writeFile, readFile, access, mkdir } from "fs/promises";

export const getFileContent = async (path, filename) => {
  const pathToFile = resolve(path, `${filename}.json`);

  try {
    const fileContent = await readFile(pathToFile, "utf-8");

    return JSON.parse(fileContent);
  } catch (err) {
    throw new Error(err);
  }
};

export const setFileContent = async (path, filename, content) => {
  const pathToFile = resolve(path, `${filename}.json`);

  try {
    await writeFile(pathToFile, content);
  } catch (err) {
    throw new Error(err);
  }
};

export const initializeDirectory = async (path) => {
  const pathToDir = resolve(path);

  try {
    await access(pathToDir);
  } catch (err) {
    await mkdir(pathToDir);
  }
};

export const initializeFile = async (path, file) => {
  const filePath = resolve(path, `${file}.json`);

  try {
    await access(filePath);
  } catch (err) {
    await writeFile(filePath, "[]");
  }
};
