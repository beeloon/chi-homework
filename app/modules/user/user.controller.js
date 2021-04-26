import * as userService from "./user.service.js";

export const signupUser = async (req, res) => {
  const mockUser = {
    name: "Test",
    isAdmin: true,
  };

  await userService.createUser(mockUser);
};

export const getUser = async (req, res) => {
  const mockUser_id = "f1c158e9-db72-4c3c-8450-2ed79425ef9d";

  await userService.findUserById(mockUser_id);
};

export const listUsers = async (req, res) => {
  await userService.findAllUsers();
};

export const updateUser = async (req, res) => {
  const mockUser_id = "f1c158e9-db72-4c3c-8450-2ed79425ef9d";

  await userService.updateUserById(mockUser_id, {
    name: "Bohdan",
    isAdmin: false,
  });
};

export const deleteUser = async (req, res) => {
  const mockUser_id = "f1c158e9-db72-4c3c-8450-2ed79425ef9d";

  await userService.deleteUserById(mockUser_id);
};
