import {Request, Response} from "express";
import {OrderServiceImpl} from "../../business/services/order-service";
import {OrderRepositoryImpl} from "../../persistence/repositories/order-repository";
import {OrderService} from "../../business/services/order-service.interface";
import {OrderController} from "./order-controller.interface";


export class OrderControllerImpl implements OrderController {

    private readonly orderService: OrderService;

    constructor(iOrderService: OrderService = new OrderServiceImpl(new OrderRepositoryImpl())) {
        this.orderService = iOrderService;
    }

    getAll(req: Request, res: Response): void {
        res.json(this.orderService.listOrders());
    }

    create(req: Request, res: Response): void {
        try {
            const {items} = req.body;
            const order = this.orderService.createOrder(items);
            res.status(201).json(order);
        } catch (e: any) {
            res.status(400).json({error: e.message});
        }
    }

    updateStatus(req: Request, res: Response): void {
        try {
            const id = parseInt(req.params.id);
            const {status} = req.body;
            const updated = this.orderService.updateStatus(id, status);
            res.json(updated);
        } catch (e: any) {
            res.status(400).json({error: e.message});
        }
    }

    addItem(req: Request, res: Response): void {
        try {
            const id = parseInt(req.params.id);
            const {name, quantity} = req.body;
            const updated = this.orderService.addItem(id, {name, quantity});
            res.json(updated);
        } catch (e: any) {
            res.status(400).json({error: e.message});
        }
    }

    removeItem(req: Request, res: Response): void {
        try {
            const id = parseInt(req.params.id);
            const {name} = req.body;
            const updated = this.orderService.removeItem(id, name);
            res.json(updated);
        } catch (e: any) {
            res.status(400).json({error: e.message});
        }
    }

    deleteOrder(req: Request, res: Response): void {
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