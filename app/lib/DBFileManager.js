import { v4 as uuid } from "uuid";

import {
  getFileContent,
  setFileContent,
  initializeFile,
  initializeDirectory,
} from "../utils/index.js";

export default class AsyncAdapter {
  constructor(path, ...files) {
    this.path = path;
    this.files = files;
  }

  async init() {
    await initializeDirectory(this.path);
    for (let file of this.files) {
      await initializeFile(this.path, file, "json");
    }
  }

  async create(file, data) {
    const id = uuid();
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

    if (id === null) return fileContent;

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
