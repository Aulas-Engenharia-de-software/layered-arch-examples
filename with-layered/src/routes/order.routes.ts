import {Router} from "express";
import {OrderController} from "../controllers/order.controller";

const router = Router();
const orderController: OrderController = new OrderController();

router.get("/orders", (req, res) => orderController.getAll(req, res));
router.post("/orders", (req, res) =>  orderController.create(req, res));
router.put("/orders/:id/status", (req, res) => orderController.updateStatus(req, res));
router.post("/orders/:id/items", (req, res) => orderController.addItem(req, res));
router.delete('/orders/:id/items', (req, res) => orderController.removeItem(req, res));
router.delete('/orders/:id', (req, res) => orderController.deleteOrder(req, res));

export default router;
