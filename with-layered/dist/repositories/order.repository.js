"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
let orders = [];
let nextId = 1;
exports.OrderRepository = {
    findAll() {
        return orders;
    },
    findById(id) {
        return orders.find(o => o.id === id);
    },
    save(items) {
        const order = {
            id: nextId++,
            items,
            status: "pendente"
        };
        orders.push(order);
        return order;
    },
    update(order) {
        const index = orders.findIndex(o => o.id === order.id);
        if (index !== -1)
            orders[index] = order;
        return order;
    },
    delete(id) {
        const index = orders.findIndex(o => o.id === id);
        if (index === -1)
            return false;
        orders.splice(index, 1);
        return true;
    }
};
