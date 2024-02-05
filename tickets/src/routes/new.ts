import express, { Request, Response } from "express";
import { requireAuth } from "../../../common/src/middlewares/require-auth";
import { body } from "express-validator";
import { validateRequest } from "../../../common/src/middlewares/validate-request";

const router = express.Router();

router.post(
  "/api/tickets",
  requireAuth,
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than 0"),
  ],
  validateRequest,
  (req: Request, res: Response) => {
    res.sendStatus(200);
  }
);

export { router as createTicketRouter };
