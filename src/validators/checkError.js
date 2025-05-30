import { validationResult } from "express-validator";

export const checkErrors = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  } else {
    next();
  }
};
