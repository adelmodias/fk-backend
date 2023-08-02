import { Router } from "express";
import { GetUsersController } from "../modules/users/useCases/GetUsers/GetUsersController";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { UpdateUserController } from "../modules/users/useCases/UpdateUsers/UpdateUserController";
import { DeleteUserController } from "../modules/users/useCases/DeleteUsers/DeleteUserController";

import { GetUserByEmailAndPassController } from "../modules/users/useCases/GetUserLogin/GetUserByEmailAndPassController";

const createUserController = new CreateUserController();
const getUsersController = new GetUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const getUserByEmailAndPassController = new GetUserByEmailAndPassController();

const userRoutes = Router();

userRoutes.get("/", getUsersController.handle);
userRoutes.post("/", createUserController.handle);
userRoutes.patch("/", updateUserController.handle);
userRoutes.delete("/", deleteUserController.handle);

userRoutes.post("/login", getUserByEmailAndPassController.handle);

export { userRoutes };
