"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_service_1 = require("../services/order.service");
exports.OrderController = {
    getAll(req, res) {
        res.json(order_service_1.OrderService.listOrders());
    },
    create(req, res) {
        try {
            const { items } = req.body;
            const order = order_service_1.OrderService.createOrder(items);
            res.status(201).json(order);
        }
        catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    updateStatus(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { status } = req.body;
            const updated = order_service_1.OrderService.updateStatus(id, status);
            res.json(updated);
        }
        catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    addItem(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { name, quantity } = req.body;
            const updated = order_service_1.OrderService.addItem(id, { name, quantity });
            res.json(updated);
        }
        catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    removeItem(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { name } = req.body;
            const updated = order_service_1.OrderService.removeItem(id, name);
            res.json(updated);
        }
        catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    deleteOrder(req, res) {
        try {
            const id = parseInt(req.params.id);
            const deleted = order_service_1.OrderService.deleteOrder(id);
            if (!deleted) {
                res.status(404).json({ error: 'Pedido não encontrado' });
            }
            res.status(204).end();
        }
        catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
};
