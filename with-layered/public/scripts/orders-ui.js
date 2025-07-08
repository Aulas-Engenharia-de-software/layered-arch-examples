const api = 'http://localhost:3000/api';

async function fetchOrders() {
    const res = await fetch(`${api}/orders`);
    const orders = await res.json();
    const list = document.getElementById('orders-list');
    list.innerHTML = '';

    orders.forEach(order => {
        const li = document.createElement('li');
        li.classList.add('order-card');
        li.innerHTML = `
          <h3>Pedido ${order.id}</h3>
          <p><strong>Status:</strong> ${order.status}</p>
          <p><strong>Itens:</strong> ${order.items.map(i => `${i.name} (${i.quantity})`).join(', ')}</p>
          <div class="actions">
            <button onclick="changeStatus(${order.id})">Para \"em preparo\"</button>
            <button onclick="addItem(${order.id})">+ Batata</button>
            <button onclick="removeItem(${order.id})">Remover Batata</button>
            <button onclick="deleteOrder(${order.id})" class="danger">Remover Pedido</button>
          </div>
        `;
        list.appendChild(li);
    });
}

async function changeStatus(id) {
    await fetch(`${api}/orders/${id}/status`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({status: 'em preparo'})
    });
    fetchOrders();
}

async function addItem(id) {
    await fetch(`${api}/orders/${id}/items`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: 'Batata', quantity: 1})
    });
    fetchOrders();
}

async function removeItem(id) {
    await fetch(`${api}/orders/${id}/items`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: 'Batata'})
    });
    fetchOrders();
}

async function deleteOrder(id) {
    await fetch(`${api}/orders/${id}`, {
        method: 'DELETE'
    });
    fetchOrders();
}

document.getElementById('order-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('item-name').value;
    const qty = parseInt(document.getElementById('item-qty').value);

    await fetch(`${api}/orders`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({items: [{name, quantity: qty}]})
    });

    document.getElementById('item-name').value = '';
    document.getElementById('item-qty').value = 1;
    fetchOrders();
});

fetchOrders();