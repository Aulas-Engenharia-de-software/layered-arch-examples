import {OrderBo} from "../models/order-bo";
import {ItemBo} from "../models/item-bo";
import {ItemDao} from "../../persistence/daos/item-dao";
import {OrderService} from "./order-service.interface";
import {OrderRepository} from "../../persistence/repositories/order-repository.interface";
import {OrderDao} from "../../persistence/daos/order-dao";
import {OrderRepositoryImpl} from "../../persistence/repositories/order-repository";

type OrderStatus = "pendente" | "em preparo" | "entregue";

export class OrderServiceImpl implements OrderService {

    private readonly iOrderRepository: OrderRepository;

    constructor(iOrderRepository: OrderRepository = new OrderRepositoryImpl()) {
        this.iOrderRepository = iOrderRepository;
    }

    listOrders(): OrderBo[] {
        const orderDaos: OrderDao[] = this.iOrderRepository.findAll();
        return orderDaos.map(order => ({
            id: order.id,
            items: order.items,
            status: order.status
        }));
    }

    createOrder(items: ItemBo[]): OrderBo {
        if (!Array.isArray(items) || items.length === 0) {
            throw new Error("Pedido deve ter ao menos um item.");
        }
        const itemDaoList: ItemDao[] = items.map(item => {
            if (!item.name || !item.quantity) {
                throw new Error("Item inválido: nome e quantidade são obrigatórios.");
            }
            return {
                name: item.name,
                quantity: item.quantity,
            };
        });

        const orderDao: OrderDao = this.iOrderRepository.save(itemDaoList);
        return {
            id: orderDao.id,
            items: orderDao.items,
            status: orderDao.status
        };
    }

    updateStatus(id: number, status: OrderStatus): OrderBo {
        const orderDao: OrderDao | undefined = this.iOrderRepository.findById(id);
        if (!orderDao) {
            throw new Error("Pedido não encontrado.");
        }
        if (orderDao.status === "entregue") {
            throw new Error("Pedido já foi entregue.");
        }
        if (!["pendente", "em preparo", "entregue"].includes(status)) {
            throw new Error("Status inválido.");
        }

        orderDao.status = status;
        const updatedOrderDao: OrderDao = this.iOrderRepository.update(orderDao);

        return {
            id: updatedOrderDao.id,
            items: updatedOrderDao.items,
            status: updatedOrderDao.status
        };
    }

    addItem(id: number, item: ItemBo): OrderBo {
        const orderDao: OrderDao | undefined = this.iOrderRepository.findById(id);
        if (!orderDao) {
            throw new Error("Pedido não encontrado.");
        }
        if (!item.name || !item.quantity) {
            throw new Error("Item inválido: nome e quantidade são obrigatórios.");
        }

        orderDao.items.push(item);
        const updatedOrderDao: OrderDao = this.iOrderRepository.update(orderDao);
        return {
            id: updatedOrderDao.id,
            items: updatedOrderDao.items,
            status: updatedOrderDao.status
        };
    }

    removeItem(id: number, itemName: string): OrderBo {
        const orderDao: OrderDao | undefined = this.iOrderRepository.findById(id);
        if (!orderDao) throw new Error("Pedido não encontrado.");

        orderDao.items = orderDao.items.filter(i => i.name !== itemName);
        return this.iOrderRepository.update(orderDao);
    }

    deleteOrder(id: number): boolean {
        return this.iOrderRepository.delete(id);
    }
}