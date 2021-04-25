import DBFileManager from "../../lib/DBFileManager.js";

const path = process.env.DB_DATA_FOLDER_PATH;
const dbManager = new DBFileManager(path, "users");

export default class User {
  static async create(userData) {
    await dbManager.addEntityToFile("users", userData);
  }

  static async findOne(id) {
    await dbManager.getEntityFromFileById("users", id);
  }

  static async findAll() {
    await dbManager.getAllEntitiesFromFile("users");
  }

  static async updateOne(id, data) {
    await dbManager.updateEntityById("users", id, data);
  }

  static async deleteOne(id) {
    await dbManager.deleteEntityFromFile("users", id);
  }
}
