import FileAdapter from "./src/FileAdapter.js";

const path = process.env.DATA_FOLDER_PATH;

const adapter = new FileAdapter(path, "users", "posts");

// create
const user = await adapter.create("users", { name: "Dmitry", age: 28 });
const user2 = await adapter.create("users", { name: "Dmitry", age: 28 });

// get
console.log(await adapter.get("users", user.id));

// update
await adapter.update("users", user.id, {
  name: "Oleg",
  age: 25,
});

// delete
await adapter.delete("users", user2.id);
