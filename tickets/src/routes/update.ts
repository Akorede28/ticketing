import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "../../../common/src/middlewares/validate-request";
import { NotFoundError } from "../../../common/src/errors/not-found-error";
import { requireAuth } from "../../../common/src/middlewares/require-auth";
import { NotAuthorizedError } from "../../../common/src/errors/not-authorized-error";

import { Ticket } from "../models/ticket";

const router = express.Router();

router.put(
  "/api/tickets/:id",
  requireAuth,
  async (req: Request, res: Response) => {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      throw new NotFoundError();
    }

    if (ticket.userId !== req.params.id) {
      throw new NotFoundError();
    }

    res.send(ticket);
  }
);
export { router as updateTicketRouter };
