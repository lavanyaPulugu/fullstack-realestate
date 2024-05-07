import express from "express";
import { test } from "../controller/user.controller.jsnpm i bcrypt";

const router = express.Router();

router.get("/test", test);

export default router;
