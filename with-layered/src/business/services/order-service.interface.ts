import {OrderBo} from "../models/order-bo";
import {ItemBo} from "../models/item-bo";

export interface OrderService {

    listOrders(): OrderBo[];

    createOrder(items: ItemBo[]): OrderBo;

    updateStatus(id: number, status: string): OrderBo;

    addItem(id: number, item: ItemBo): OrderBo;

    removeItem(id: number, itemName: string): OrderBo;

    deleteOrder(id: number): boolean;

}