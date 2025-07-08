import {Router} from "express";
import {OrderController} from "../controllers/order.controller";

const router = Router();
const orderController: OrderController = new OrderController();

router.get("/orders", orderController.getAll);
router.post("/orders", orderController.create);
router.put("/orders/:id/status", orderController.updateStatus);
router.post("/orders/:id/items", orderController.addItem);
router.delete('/orders/:id/items', orderController.removeItem);
router.delete('/orders/:id', orderController.deleteOrder);

export default router;
