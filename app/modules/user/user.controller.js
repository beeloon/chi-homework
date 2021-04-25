import * as userService from "./user.service.js";

export const signupUser = async (req, res) => {
  const mockUser = {
    name: "Test",
    isAdmin: true,
  };

  await userService.createUser(mockUser);
};

export const getUser = async (req, res) => {};

export const listUsers = async (req, res) => {};

export const updateUser = async (req, res) => {};

export const deleteUser = async (req, res) => {};
