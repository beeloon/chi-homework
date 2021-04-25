import Router from "./lib/Router";
import * as userController from "./modules/user/user.controller";

const router = new Router();

router.post("/user", userController.signupUser);

router.get("/user", userController.listUsers);
router.get("/user/:id", userController.getUser);

router.patch("/user/:id", userController.updateUser);

router.delete("/user/:id", userController.deleteUser);
