import {Order} from "../models/order.model";
import {OrderItem} from "../models/item.model";

let orders: Order[] = [];
let nextId = 1;

export class OrderRepository {

    findAll(): Order[] {
        return orders;
    }

    findById(id: number): Order | undefined {
        return orders.find(o => o.id === id);
    }

    save(items: OrderItem[]): Order {
        const order: Order = {
            id: nextId++,
            items,
            status: "pendente"
        };
        orders.push(order);
        return order;
    }

    update(order: Order): Order {
        const index = orders.findIndex(o => o.id === order.id);
        if (index !== -1) orders[index] = order;
        return order;
    }

    delete(id: number) {
        const index = orders.findIndex(o => o.id === id);
        if (index === -1) return false;
        orders.splice(index, 1);
        return true;
    }
}