import express from "express";
import multer from "multer";
import {
  createRestaurant,
  getRestaurant,
} from "../controllers/restaurantController";
import { jwtCheck, jwtParser } from "../middleware/auth";
import { validateRestaurantRequest } from "../middleware/validation";

const restaurantRoutes = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5mb
  },
});

restaurantRoutes
  .route("/")
  .post(
    validateRestaurantRequest,
    jwtCheck,
    jwtParser,
    upload.single("imageFile"),
    createRestaurant
  )
  .get(getRestaurant);

export default restaurantRoutes;
