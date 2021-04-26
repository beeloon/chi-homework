import { resolve } from "path";
import { writeFile, readFile, access, mkdir } from "fs/promises";

export default class DBFileManager {
  constructor(path, ...files) {
    this.path = path;
    this.files = files;
  }

  async init() {
    await this.initializeDirectory();
    for (let file of this.files) {
      await this.initializeFile(file);
    }
  }

  async addEntityToFile(file, entityData) {
    const fileContent = await this.getFileContent(file);

    await this.setFileContent(
      file,
      JSON.stringify([...fileContent, entityData])
    );

    return entityData;
  }

  async getEntityFromFileById(file, id) {
    const fileContent = await this.getFileContent(file);

    return fileContent.find((entity) => entity.id === id);
  }

  async getAllEntitiesFromFile(file) {
    const fileContent = await this.getFileContent(file);

    return fileContent;
  }

  async updateEntityById(file, id, newData) {
    const fileContent = await this.getFileContent(file);

    const newContent = fileContent.map((entity) => {
      if (entity.id === id) {
        return {
          id,
          ...newData,
        };
      }

      return entity;
    });

    await this.setFileContent(file, JSON.stringify(newContent));
  }

  async deleteEntityFromFile(file, id) {
    const fileContent = await this.getFileContent(file);
    const newContent = fileContent.filter((entity) => entity.id !== id);

    await this.setFileContent(file, JSON.stringify(newContent));
  }

  async initializeFile(file) {
    const filePath = resolve(this.path, `${file}.json`);

    try {
      await access(filePath);
    } catch (err) {
      await writeFile(filePath, "[]");
    }
  }

  async initializeDirectory() {
    const pathToDir = resolve(this.path);

    try {
      await access(pathToDir);
    } catch (err) {
      await mkdir(pathToDir);
    }
  }

  async getFileContent(filename) {
    const pathToFile = resolve(this.path, `${filename}.json`);

    try {
      const fileContent = await readFile(pathToFile, "utf-8");

      return JSON.parse(fileContent);
    } catch (err) {
      throw new Error(err);
    }
  }

  async setFileContent(filename, content) {
    const pathToFile = resolve(this.path, `${filename}.json`);

    try {
      await writeFile(pathToFile, content);
    } catch (err) {
      throw new Error(err);
    }
  }
}
