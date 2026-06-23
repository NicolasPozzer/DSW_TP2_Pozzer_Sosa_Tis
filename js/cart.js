

let cart = JSON.parse(localStorage.getItem('rg_cart') || '[]');

function saveCart() {
  localStorage.setItem('rg_cart', JSON.stringify(cart));
  actualizarUICarrito();
}

function actualizarUICarrito() {
  const badge = document.getElementById('cartBadge');
  const cartItems = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');
  const cartSubtotal = document.getElementById('cartSubtotal');

  const totalQty = cart.reduce((acc, i) => acc + i.qty, 0);
  if (badge) badge.textContent = totalQty;

  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <span class="empty-icon">🛒</span>
        <span>Tu carrito está vacío</span>
      </div>`;
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }

  if (cartFooter) cartFooter.style.display = 'block';

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.img}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/60x52/1a1a2e/00b4d8?text=IMG'" />
      </div>
      <div class="cart-item-info">
        <div class="item-name">${item.title}</div>
        <div class="item-unit-price">$ ${formatPrice(item.price)}</div>
        <div class="item-controls">
          <button class="qty-btn-sm" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn-sm" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <div class="cart-item-right">
        <span class="item-total">$ ${formatPrice(item.price * item.qty)}</span>
        <button class="btn-remove" onclick="removeFromCart(${item.id})" title="Eliminar">
          <i class="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  `).join('');

  const subtotal = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
  if (cartSubtotal) cartSubtotal.textContent = `$ ${formatPrice(subtotal)}`;
}

function agregarAlCarrito(gameId) {
  const game = GAMES.find(g => g.id === gameId);
  if (!game || !game.stock) return;

  const existing = cart.find(i => i.id === gameId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: game.id, title: game.title, price: game.price, img: game.img, qty: 1 });
  }
  saveCart();
  mostrarNotificacion(`"${game.title}" agregado al carrito`);
  abrirCarrito();
}

function removeFromCart(gameId) {
  cart = cart.filter(i => i.id !== gameId);
  saveCart();
}

function changeQty(gameId, delta) {
  const item = cart.find(i => i.id === gameId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== gameId);
  saveCart();
}

function clearCart() {
  cart = [];
  saveCart();
}

function formatPrice(n) {
  return n.toLocaleString('es-AR', { minimumFractionDigits: 2 });
}

function abrirCarrito() {
  const overlay = document.getElementById('cartOverlay');
  if (overlay) overlay.classList.add('open');
}

function cerrarCarrito() {
  const overlay = document.getElementById('cartOverlay');
  if (overlay) overlay.classList.remove('open');
}

function mostrarNotificacion(msg) {
  const toast = document.getElementById('toastMsg');
  const text = document.getElementById('toastText');
  if (!toast) return;
  if (text) text.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// carrito abrir/cerrar
document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('abrirCarritoBtn');
  const closeBtn = document.getElementById('cerrarCarritoBtn');
  const overlay = document.getElementById('cartOverlay');

  if (openBtn) openBtn.addEventListener('click', abrirCarrito);
  if (closeBtn) closeBtn.addEventListener('click', cerrarCarrito);
  if (overlay) overlay.addEventListener('click', (e) => {
    if (e.target === overlay) cerrarCarrito();
  });

  actualizarUICarrito();
});
