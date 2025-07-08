import { OrderItem } from "./item.model";

export interface Order {
    id: number;
    items: OrderItem[];
    status: "pendente" | "em preparo" | "entregue";
}
