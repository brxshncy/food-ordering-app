import express from "express";
import { jwtCheck } from "./../middleware/auth";
import {
  createCurrentUser,
  getCurrentUser,
  updateCurrentUser,
} from "../controllers/userController";

const myUserRoute = express.Router();

// Create User Route associated with User Controller
myUserRoute
  .route("/")
  .post(jwtCheck, createCurrentUser)
  .get(jwtCheck, getCurrentUser)
  .put(jwtCheck, updateCurrentUser);

export default myUserRoute;
