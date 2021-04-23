import * as userService from "./user.service.js";

export const getUser = async (req, res) => {
  // const { id } = req.params;
  const mockUser = {
    id: "test-id",
    name: "Test",
  };

  userService.getUser(mockUser.id);
};

// export const getAllUsers = async (req, res) => {};

// export const registerUser = async (req, res) => {};

// export const updateUser = async (req, res) => {};

// export const deleteUser = async (req, res) => {};
