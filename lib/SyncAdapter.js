import { v4 as uuid } from "uuid";

import {
  getFileContentSync,
  setFileContentSync,
  initializeFileSync,
  initializeDirectorySync,
} from "../utils/syncUtils.js";

export default class SyncAdapter {
  constructor(path, ...files) {
    this.path = path;
    this.files = files;

    initializeDirectorySync(this.path);
    for (let file of this.files) {
      initializeFileSync(this.path, file, "json");
    }
  }

  create(file, data) {
    const id = uuid();
    const fileContent = getFileContentSync(this.path, file);

    const newEntity = { id, ...data };

    setFileContentSync(
      this.path,
      file,
      JSON.stringify([...fileContent, newEntity])
    );

    return newEntity;
  }

  get(file, id) {
    const fileContent = getFileContentSync(this.path, file);

    return fileContent.find((entity) => entity.id === id);
  }

  update(file, id, newData) {
    const fileContent = getFileContentSync(this.path, file);

    const newContent = fileContent.map((entity) => {
      if (entity.id === id) {
        return {
          id,
          ...newData,
        };
      }

      return entity;
    });

    setFileContentSync(this.path, file, JSON.stringify(newContent));
  }

  delete(file, id) {
    const fileContent = getFileContentSync(this.path, file);
    const newContent = fileContent.filter((entity) => entity.id !== id);

    setFileContentSync(this.path, file, JSON.stringify(newContent));
  }
}
