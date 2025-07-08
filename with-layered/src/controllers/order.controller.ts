import {Request, Response} from "express";
import {OrderService} from "../services/order.service";
import {OrderRepository} from "../repositories/order.repository";

export class OrderController {

    constructor(readonly orderService: OrderService = new OrderService(new OrderRepository())) {
        this.orderService = orderService;
    }

    getAll(req: Request, res: Response) {
        res.json(this.orderService.listOrders());
    }

    create(req: Request, res: Response) {
        try {
            const {items} = req.body;
            const order = this.orderService.createOrder(items);
            res.status(201).json(order);
        } catch (e: any) {
            res.status(400).json({error: e.message});
        }
    }

    updateStatus(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const {status} = req.body;
            const updated = this.orderService.updateStatus(id, status);
            res.json(updated);
        } catch (e: any) {
            res.status(400).json({error: e.message});
        }
    }

    addItem(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const {name, quantity} = req.body;
            const updated = this.orderService.addItem(id, {name, quantity});
            res.json(updated);
        } catch (e: any) {
            res.status(400).json({error: e.message});
        }
    }

    removeItem(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const {name} = req.body;
            const updated = this.orderService.removeItem(id, name);
            res.json(updated);
        } catch (e: any) {
            res.status(400).json({error: e.message});
        }
    }

    deleteOrder(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const deleted = this.orderService.deleteOrder(id);
            if (!deleted) {
                res.status(404).json({error: 'Pedido não encontrado'});
            }
            res.status(204).end();
        } catch (e: any) {
            res.status(400).json({error: e.message});
        }
    }
}