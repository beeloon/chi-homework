import AsyncAdapter from "./lib/AsyncAdapter.js";
import SyncAdapter from "./lib/SyncAdapter.js";

const path = process.env.DATA_FOLDER_PATH;

// SYNC STYLE
const adapter = new SyncAdapter(path, "users", "posts");

const user = adapter.create("users", { name: "Dmitry", age: 28 });
const user2 = adapter.create("users", { name: "Dmitry", age: 28 });

console.log(adapter.get("users", user.id));

adapter.update("users", user.id, {
  name: "Oleg",
  age: 25,
});

adapter.delete("users", user2.id);

// ASYNC STYLE
// const main = async () => {
//   const adapter = new AsyncAdapter(path, "users", "posts");
//   await adapter.init();

//   const user = await adapter.create("users", { name: "Dmitry", age: 28 });
//   const user2 = await adapter.create("users", { name: "Dmitry", age: 28 });

//   console.log(await adapter.get("users", user.id));

//   await adapter.update("users", user.id, {
//     name: "Oleg",
//     age: 25,
//   });

//   await adapter.delete("users", user2.id);
// };

// main();
