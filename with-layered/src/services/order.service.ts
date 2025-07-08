import {Order} from "../models/order.model";
import {OrderItem} from "../models/item.model";
import {OrderRepository} from "../repositories/order.repository";

export class OrderService {

    constructor(readonly orderRepository: OrderRepository) {
    }

    listOrders(): Order[] {
        return this.orderRepository.findAll();
    }

    createOrder(items: OrderItem[]): Order {
        if (!Array.isArray(items) || items.length === 0) {
            throw new Error("Pedido deve ter ao menos um item.");
        }
        return this.orderRepository.save(items);
    }

    updateStatus(id: number, status: string): Order {
        const order = this.orderRepository.findById(id);
        if (!order) throw new Error("Pedido não encontrado.");

        if (!["pendente", "em preparo", "entregue"].includes(status)) {
            throw new Error("Status inválido.");
        }

        order.status = status as Order["status"];
        return this.orderRepository.update(order);
    }

    addItem(id: number, item: OrderItem): Order {
        const order = this.orderRepository.findById(id);
        if (!order) throw new Error("Pedido não encontrado.");

        order.items.push(item);
        return this.orderRepository.update(order);
    }

    removeItem(id: number, itemName: string): Order {
        const order: Order | undefined = this.orderRepository.findById(id);
        if (!order) throw new Error("Pedido não encontrado.");

        order.items = order.items.filter(i => i.name !== itemName);
        return this.orderRepository.update(order);
    }

    deleteOrder(id: number) {
        return this.orderRepository.delete(id);
    }
}