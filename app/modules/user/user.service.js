import { v4 as uuid } from "uuid";

import User from "./user.model.js";

const user = new User();

export const createUser = async (userData) => {
  console.log(`POST /user :: Create new user with name: ${userData.name}`);

  const id = uuid();
  const newUser = { ...userData, id };

  await user.create(newUser);
};

export const findUserById = async (userId) => {
  console.log(`GET /user/:id :: Get single user by id: ${userId}`);

  await user.findOne(userId);
};

export const findAllUsers = async () => {
  console.log(`GET /user :: Get all users from db`);

  await user.findAll();
};

export const updateUserById = async (userId, newUserData) => {
  console.log(`PATCH /user/:id :: Update single user by id: ${userId}`);

  await user.updateOne(userId, newUserData);
};

export const deleteUserById = async (userId) => {
  console.log(`DELETE /user/:id :: Delete single user by id: ${userId}`);

  await user.deleteOne(userId);
};
