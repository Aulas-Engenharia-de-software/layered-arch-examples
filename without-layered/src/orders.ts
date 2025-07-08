import {Router} from 'express';

const router = Router();

let orders: any[] = [];
let nextId = 1;

router.post('/orders', (req: any, res: any) => {
    const {items} = req.body;
    const order = {id: nextId++, items, status: 'recebido'};
    orders.push(order);
    res.status(201).json(order);
});

// Listar pedidos
router.get('/orders', (req, res) => {
    res.json(orders);
});

router.put('/orders/:id/status', (req: any, res: any) => {
    const id = parseInt(req.params.id);
    const {status} = req.body;
    const order = orders.find(o => o.id === id);
    if (!order) return res.status(404).json({error: 'Pedido não encontrado'});
    order.status = status;
    res.json(order);
});

router.post('/orders/:id/items', (req: any, res: any) => {
    const id = parseInt(req.params.id);
    const {name, quantity} = req.body;
    const order = orders.find(o => o.id === id);
    if (!order) return res.status(404).json({error: 'Pedido não encontrado'});
    const existing = order.items.find((i: any) => i.name === name);
    if (existing) {
        existing.quantity += quantity;
    } else {
        order.items.push({name, quantity});
    }
    res.json(order);
});

router.delete('/orders/:id/items', (req: any, res: any) => {
    const id = parseInt(req.params.id);
    const {name} = req.body;
    const order = orders.find(o => o.id === id);
    if (!order) return res.status(404).json({error: 'Pedido não encontrado'});
    order.items = order.items.filter((i: any) => i.name !== name);
    res.json(order);
});

router.delete('/orders/:id', (req: any, res: any) => {
    const id = parseInt(req.params.id);
    const index = orders.findIndex(o => o.id === id);
    if (index === -1) return res.status(404).json({error: 'Pedido não encontrado'});
    orders.splice(index, 1);
    res.status(204).end();
});

export default router;
