import User from "./user.model.js";

export const getUser = async (userId) => {
  console.log(`GET /user with id: ${userId}`);
  User.findOne(userId);
};

// export const getAllUsers = async () => {};

// export const registerUser = async () => {};

// export const updateUser = async () => {};

// export const deleteUser = async () => {};
