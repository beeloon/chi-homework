import { STATUS_CODES } from "http";
import { getIdParamFromUrl } from "../../utils/index.js";

import { userService } from "./user.service.js";

export const signupUser = async (req, res) => {
  try {
    let user = "";

    await req.on("data", (chunk) => {
      user += chunk;
    });

    await userService.createUser(JSON.parse(user));

    res.end(STATUS_CODES[201]);
  } catch (err) {
    res.end(STATUS_CODES[404]);
  }
};

export const getUser = async (req, res) => {
  try {
    const userId = getIdParamFromUrl(req.url);
    const user = await userService.findUserById(userId);

    res.end(JSON.stringify(user));
  } catch (err) {
    res.end(STATUS_CODES[404]);
  }
};

export const listUsers = async (req, res) => {
  try {
    const users = await userService.findAllUsers();

    res.end(JSON.stringify(users));
  } catch (err) {
    res.end(STATUS_CODES[404]);
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = getIdParamFromUrl(req.url);
    let newUserData = "";

    await req.on("data", (chunk) => {
      newUserData += chunk;
    });

    const updatedUser = await userService.updateUserById(
      userId,
      JSON.parse(newUserData)
    );

    res.end(JSON.stringify(updatedUser));
  } catch (err) {
    res.end(STATUS_CODES[404]);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = getIdParamFromUrl(req.url);

    await userService.deleteUserById(userId);
    res.end(STATUS_CODES[200]);
  } catch (err) {
    res.end(STATUS_CODES[404]);
  }
};
