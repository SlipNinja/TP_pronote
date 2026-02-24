import express from "express";
import { validate } from "../middlewares/validate.middleware.js";
import { auth_schema, register } from "../controllers/auth.controller.js";

const auth_router = express.Router();

auth_router.post("/register", validate(auth_schema), register);

export default auth_router;
