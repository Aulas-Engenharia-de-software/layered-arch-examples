
import {ItemDao} from "./item-dao";

export interface OrderDao {
    id: number;
    items: ItemDao[];
    status: "pendente" | "em preparo" | "entregue";
}
