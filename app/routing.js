import Router from "./lib/Router";
import * as userController from "./modules/user/user.controller";

const router = new Router();

router.get("/users", userController.getAllUsers);
router.get("/users:id", userController.getUser);

router.post("/users", userController.registerUser);

router.put("/users/:id", userController.updateUser);

router.get("/users", userController.deleteUser);
