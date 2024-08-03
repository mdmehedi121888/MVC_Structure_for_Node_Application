import express from "express";
import { deleteUser, errorHandle, getUser, logIn, register, updateUser } from "../controller/userController.js";

 const router = express.Router();

router.post("/register",register);
router.post("/logIn",logIn);
router.delete("/delete/:id",deleteUser);
router.put("/update/:id",updateUser);
router.get("/getUser/:id",getUser);
router.get("*",errorHandle);

export default router;