import { v4 as uuid } from "uuid";
import User from "./user.model.js";

export const createUser = async (userData) => {
  console.log(`POST /user: ${userData.name}`);

  const id = uuid();
  const newUser = { ...userData, id };

  await User.create(newUser);
};

export const findUserById = async (userId) => {};

export const findAllUsers = async () => {};

export const updateUserById = async () => {};

export const deleteUserById = async () => {};
