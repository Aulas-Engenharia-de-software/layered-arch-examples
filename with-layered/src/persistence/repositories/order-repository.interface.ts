import {OrderDao} from "../daos/order-dao";
import {ItemDao} from "../daos/item-dao";

export interface OrderRepository {

    findAll(): OrderDao[];

    findById(id: number): OrderDao | undefined;

    save(items: ItemDao[]): OrderDao;

    update(order: OrderDao): OrderDao;

    delete(id: number): boolean;

}