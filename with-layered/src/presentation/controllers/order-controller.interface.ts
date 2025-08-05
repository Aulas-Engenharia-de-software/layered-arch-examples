import {Request, Response} from "express";

export interface OrderController {

    getAll(req: Request, res: Response): void;

    create(req: Request, res: Response): void;

    updateStatus(req: Request, res: Response): void;

    addItem(req: Request, res: Response): void;

    removeItem(req: Request, res: Response): void

    deleteOrder(req: Request, res: Response): void;
}