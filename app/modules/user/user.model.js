import DBFileManager from "../../lib/DBFileManager.js";

const path = process.env.DB_DATA_FOLDER_PATH;

export default class User {
  constructor() {
    this.repository = new DBFileManager(path, "users");
  }

  async create(userData) {
    await this.repository.addEntityToFile("users", userData);
  }

  async findOne(id) {
    await this.repository.getEntityFromFileById("users", id);
  }

  async findAll() {
    await this.repository.getAllEntitiesFromFile("users");
  }

  async updateOne(id, data) {
    await this.repository.updateEntityById("users", id, data);
  }

  async deleteOne(id) {
    await this.repository.deleteEntityFromFile("users", id);
  }
}
