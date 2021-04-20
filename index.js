import FileAdapter from "./src/FileAdapter.js";

const path = process.env.DATA_FOLDER_PATH;

const adapter = new FileAdapter(path, "users", "posts");

// create
adapter.create("users", { name: "Ivan", age: 17 });

// get
const user = await adapter.get("users", "1bf41c4b-2c81-4090-93a9-f1cda2e83487");
console.log(user);

// update
adapter.update("users", "9aad82cf-427d-4118-addd-5f28afc991a1", {
  name: "Anastasia",
});

// delete
adapter.delete("users", "1bf41c4b-2c81-4090-93a9-f1cda2e83487");
