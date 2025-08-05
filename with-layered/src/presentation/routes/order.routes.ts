import {Router} from "express";
import {OrderControllerImpl} from "../controllers/order-controller";
import {OrderController} from "../controllers/order-controller.interface";

const router = Router();
const orderController: OrderController = new OrderControllerImpl();

router.get("/orders", (req: any, res: any): void => orderController.getAll(req, res));

router.post("/orders", (req: any, res: any): void => orderController.create(req, res));

router.put("/orders/:id/status", (req: any, res: any): void => orderController.updateStatus(req, res));

router.post("/orders/:id/items", (req: any, res: any): void => orderController.addItem(req, res));

router.delete('/orders/:id/items', (req: any, res: any): void => orderController.removeItem(req, res));

router.delete('/orders/:id', (req: any, res: any): void => orderController.deleteOrder(req, res));


export default router;
