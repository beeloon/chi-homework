import {
  getFileContent,
  setFileContent,
  initializeFile,
  initializeDirectory,
} from "../utils/index.js";

export default class DBFileManager {
  constructor(path, ...files) {
    this.path = path;
    this.files = files;
  }

  async init() {
    await initializeDirectory(this.path);
    for (let file of this.files) {
      await initializeFile(this.path, file);
    }
  }

  async addEntityToFile(file, entityData) {
    const fileContent = await getFileContent(this.path, file);

    await setFileContent(
      this.path,
      file,
      JSON.stringify([...fileContent, entityData])
    );

    return newEntity;
  }

  async getEntityFromFileById(file, id) {
    const fileContent = await getFileContent(this.path, file);

    return fileContent.find((entity) => entity.id === id);
  }

  async getAllEntitiesFromFile(file) {
    const fileContent = await getFileContent(this.path, file);

    return fileContent;
  }

  async updateEntityById(file, id, newData) {
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

  async deleteEntityFromFile(file, id) {
    const fileContent = await getFileContent(this.path, file);
    const newContent = fileContent.filter((entity) => entity.id !== id);

    await setFileContent(this.path, file, JSON.stringify(newContent));
  }
}
