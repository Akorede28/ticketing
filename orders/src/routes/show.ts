import express, { Request, Response } from "express";
import { requireAuth } from "../../../common/src/middlewares/require-auth";
import { Order } from "../models/order";
import { NotAuthorizedError } from "../../../common/src/errors/not-authorized-error";
import { NotFoundError } from "../../../common/src/errors/not-found-error";

const router = express.Router();

router.get(
  "/api/orders/:orderId",
  requireAuth,
  async (req: Request, res: Response) => {
    const order = await Order.findById(req.params.orderId).populate("ticket");

    if (!order) {
      throw new NotFoundError();
    }
    if (order.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    res.send(order);
  }
);

export { router as showOrderRouter };
