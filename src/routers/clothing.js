import express from "express";
import {
  deleteCloth,
  getCloth,
  patchCloth,
  postCloth,
} from "../controllers/clothing.js";

import { checkClothInput, validateInParam } from "../validators/clothing.js";
import { checkErrors } from "../validators/checkError.js";

const router = express.Router();

router.get("/clothing", getCloth);

router.post("/clothing", checkClothInput, checkErrors, postCloth);

router.delete("/clothing/:id", validateInParam, checkErrors, deleteCloth);

router.patch("/clothing/:id", patchCloth);

export default router;
