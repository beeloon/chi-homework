import { v4 as uuidv4 } from "uuid";

import {
  getFileContent,
  setFileContent,
  initializeFileSync,
  initializeDirectorySync,
} from "./Utils.js";

export default class FileAdapter {
  constructor(path, ...files) {
    this.path = path;
    this.files = files;

    initializeDirectorySync(this.path);
    for (let file of this.files) {
      initializeFileSync(this.path, file, "json");
    }
  }

  async create(file, data) {
    const id = uuidv4();
    const fileContent = await getFileContent(this.path, file);

    const newEntity = { id, ...data };

    await setFileContent(
      this.path,
      file,
      JSON.stringify([...fileContent, newEntity])
    );

    return newEntity;
  }

  async get(file, id) {
    const fileContent = await getFileContent(this.path, file);

    return fileContent.find((entity) => entity.id === id);
  }

  async update(file, id, newData) {
    const fileContent = await getFileContent(this.path, file);

    const newContent = fileContent.map((entity) => {
      if (entity.id === id) {
        return {
          id,
          ...newData,
        };
      }

      return entity;
    });

    await setFileContent(this.path, file, JSON.stringify(newContent));
  }

  async delete(file, id) {
    const fileContent = await getFileContent(this.path, file);
    const newContent = fileContent.filter((entity) => entity.id !== id);

    await setFileContent(this.path, file, JSON.stringify(newContent));
  }
}
