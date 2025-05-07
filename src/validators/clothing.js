import { body, param } from "express-validator";

export const checkClothInput = [
  body("categorie", "categorie is required").not().isEmpty(),
  body("quantity", "quantity is requited").notEmpty(),
  body("quantity", "quantity must be a number").isInt(),
];

export const validateInParam = [param("id", "id is valid").isMongoId()];
