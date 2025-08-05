import {ItemDao} from "../daos/item-dao";
import {OrderDao} from "../daos/order-dao";
import {OrderRepository} from "./order-repository.interface";

let orderDaoList: OrderDao[] = [];
let nextId = 1;

export class OrderRepositoryImpl implements OrderRepository {

    findAll(): OrderDao[] {
        return orderDaoList;
    }

    findById(id: number): OrderDao | undefined {
        return orderDaoList.find(o => o.id === id);
    }

    save(items: ItemDao[]): OrderDao {
        const order: OrderDao = {
            id: nextId++,
            items,
            status: "pendente"
        };
        orderDaoList.push(order);
        return order;
    }

    update(order: OrderDao): OrderDao {
        const index = orderDaoList.findIndex(o => o.id === order.id);
        if (index !== -1) {
            orderDaoList[index] = order;
        }
        return order;
    }

    delete(id: number) {
        const index = orderDaoList.findIndex(o => o.id === id);
        if (index === -1) {
            return false;
        }
        orderDaoList.splice(index, 1);
        return true;
    }
}