import { resolve } from "path";
import { existsSync, writeFileSync, mkdirSync } from "fs";
import { writeFile, readFile } from "fs/promises";

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

// export const initializeDirectory = async (path) => {
//   const pathToDir = resolve(path);

//   try {
//     await access(pathToDir);
//   } catch (err) {
//     await mkdir(pathToDir);
//   }
// };

// export const initializeFile = async (path, file, ext) => {
//   const fileName = `${file}.${ext}`;
//   const filePath = resolve(path, fileName);

//   try {
//     await access(filePath);
//   } catch (err) {
//     await writeFile(filePath, "[]");
//   }
// };
