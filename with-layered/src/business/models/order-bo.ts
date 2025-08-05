import { ItemBo } from "./item-bo";

export interface OrderBo {
    id: number;
    items: ItemBo[];
    status: "pendente" | "em preparo" | "entregue";
}
