import DBFileManager from "../../lib/DBFileManager.js";

const path = process.env.DATA_FOLDER_PATH;
const dbManager = new DBFileManager(path, "users");

export default class User extends Entity {
  constructor() {
    this.name = "";
    this.posts = [];
  }

  static async create(data) {
    const { name, posts } = data;

    this.name = name;
    this.posts = posts;

    await dbManager.create("users", data);
  }

  static async findOne(id) {
    await dbManager.get("users", id);
  }

  static async findAll() {
    await dbManager.get("users", null);
  }

  static async updateOne(id, data) {
    await dbManager.update("users", id, data);
  }

  static async deleteOne(id) {
    await dbManager.delete("users", id);
  }

  // updateMany() {}
  // deleteMany() {}
}
