import * as userController from "./modules/user/user.controller";

export const routing = [
  { method: "POST", pathname: "/user", handler: userController.signupUser },
  { method: "GET", pathname: "/user", handler: userController.listUsers },
  {
    method: "GET",
    pathname: "/user/:id",
    handler: userController.getUser,
  },
  {
    method: "PATCH",
    pathname: "/user/:id",
    handler: userController.updateUser,
  },
  {
    method: "DELETE",
    pathname: "/user/:id",
    handler: userController.deleteUser,
  },
];
