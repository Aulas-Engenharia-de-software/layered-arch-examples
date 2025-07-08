"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const order_repository_1 = require("../repositories/order.repository");
exports.OrderService = {
    listOrders() {
        return order_repository_1.OrderRepository.findAll();
    },
    createOrder(items) {
        if (!Array.isArray(items) || items.length === 0) {
            throw new Error("Pedido deve ter ao menos um item.");
        }
        return order_repository_1.OrderRepository.save(items);
    },
    updateStatus(id, status) {
        const order = order_repository_1.OrderRepository.findById(id);
        if (!order)
            throw new Error("Pedido não encontrado.");
        if (!["pendente", "em preparo", "entregue"].includes(status)) {
            throw new Error("Status inválido.");
        }
        order.status = status;
        return order_repository_1.OrderRepository.update(order);
    },
    addItem(id, item) {
        const order = order_repository_1.OrderRepository.findById(id);
        if (!order)
            throw new Error("Pedido não encontrado.");
        order.items.push(item);
        return order_repository_1.OrderRepository.update(order);
    },
    removeItem(id, itemName) {
        const order = order_repository_1.OrderRepository.findById(id);
        if (!order)
            throw new Error("Pedido não encontrado.");
        order.items = order.items.filter(i => i.name !== itemName);
        return order_repository_1.OrderRepository.update(order);
    },
    deleteOrder(id) {
        return order_repository_1.OrderRepository.delete(id);
    }
};
