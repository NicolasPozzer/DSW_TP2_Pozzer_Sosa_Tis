const GAMES = [
  { id: 1, title: "GTA: San Andreas", studio: "Rockstar Games", authors: ["Rockstar Games", "Rockstar North"], price: 2999, category: "Acción", year: 2004, stock: true, currency: "ARS", img: "", description: "Grand Theft Auto: San Andreas es un videojuego de acción-aventura desarrollado por Rockstar North. Ambientado en el estado ficticio de San Andreas, el juego sigue al protagonista Carl 'CJ' Johnson que regresa a su ciudad natal tras la muerte de su madre.", reviews: [{ user: "GamerX", stars: 5, text: "Un clásico absoluto, no pasa de moda." }, { user: "RetroFan", stars: 4, text: "Excelente juego, mucho contenido." }] },
  { id: 2, title: "Red Dead Redemption 2", studio: "Rockstar Games", authors: ["Rockstar Games"], price: 7999, category: "Acción", year: 2018, stock: true, currency: "ARS", img: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg", description: "Red Dead Redemption 2 es un juego de acción-aventura de mundo abierto desarrollado y publicado por Rockstar Games. La historia sigue a Arthur Morgan, un forajido miembro de la banda Van der Linde en 1899.", reviews: [{ user: "CowboyFan", stars: 5, text: "La mejor historia de videojuegos de la última década." }] },
  { id: 3, title: "Resident Evil (1996)", studio: "Capcom", authors: ["Takahiro Arimitsu", "Isao Oishi"], price: 12999, category: "Terror", year: 1996, stock: true, currency: "ARS", img: "", description: "Resident Evil es un videojuego de survival horror desarrollado por Capcom. Los jugadores controlan a miembros del S.T.A.R.S. que investigan una mansión llena de criaturas mutantes en los Montes Arklay.", reviews: [{ user: "HorrorLover", stars: 5, text: "El juego que definió el survival horror. Imprescindible." }] },
  { id: 4, title: "Street Fighter II", studio: "Capcom", authors: ["Takashi Nishiyama", "Hiroshi Matsumoto"], price: 10999, category: "Peleas", year: 1991, stock: true, currency: "ARS", img: "", description: "Street Fighter II es el videojuego de lucha que revolucionó el género y los arcades. Con ocho personajes seleccionables, cada uno con movimientos únicos, estableció el estándar para todos los juegos de pelea posteriores.", reviews: [{ user: "FighterPro", stars: 5, text: "El rey de los juegos de pelea. Hadouken!" }] },
  { id: 5, title: "Final Fight", studio: "Capcom", authors: ["Akira Nishitani", "Akira Yasuda"], price: 22999, category: "Acción", year: 1989, stock: true, currency: "ARS", img: "", description: "Final Fight es un videojuego de beat 'em up desarrollado por Capcom. El alcalde Mike Haggar y sus aliados deben rescatar a la hija del alcalde de las garras de la banda Mad Gear en Metro City.", reviews: [{ user: "ArcadeLegend", stars: 5, text: "Clásico del arcade que nunca pasa de moda." }] },
  { id: 6, title: "Super Mario Bros", studio: "Nintendo", authors: ["Shigeru Miyamoto", "Takashi Tezuka"], price: 8999, category: "Plataformas", year: 1985, stock: true, currency: "ARS", img: "https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png", description: "Super Mario Bros es uno de los videojuegos más influyentes de la historia. Mario debe rescatar a la Princesa Peach del malvado Bowser recorriendo el Reino Champiñón.", reviews: [{ user: "NintendoFan", stars: 5, text: "El juego que me hizo amar los videojuegos." }] },
  { id: 7, title: "Pac-Man", studio: "Namco", authors: ["Toru Iwatani"], price: 3999, category: "Arcade", year: 1980, stock: true, currency: "ARS", img: "", description: "Pac-Man es el icónico videojuego arcade de Namco. Controlá al simpático Pac-Man por laberintos, comé todos los puntos y evitá a los fantasmas. ¡Un clásico atemporal!", reviews: [{ user: "ArcadeKing", stars: 5, text: "El juego más reconocible del mundo." }] },
  { id: 8, title: "Mortal Kombat II", studio: "Midway", authors: ["Ed Boon", "John Tobias"], price: 9999, category: "Peleas", year: 1993, stock: false, currency: "ARS", img: "", description: "Mortal Kombat II es la segunda entrega de la legendaria saga de juegos de pelea. Con sus brutales fatalities y personajes icónicos, marcó una generación entera de jugadores.", reviews: [{ user: "FatalityFan", stars: 5, text: "FINISH HIM! El mejor MK de la saga original." }] },
  { id: 9, title: "Sonic the Hedgehog", studio: "Sega", authors: ["Yuji Naka", "Hirokazu Yasuhara"], price: 6999, category: "Plataformas", year: 1991, stock: true, currency: "ARS", img: "", description: "Sonic the Hedgehog es el juego que presentó al erizo azul más veloz del mundo. Corre a velocidades increíbles, coleccioná anillos y enfrentá al Dr. Robotnik.", reviews: [{ user: "BlueSpeed", stars: 4, text: "GOTTA GO FAST! Un clásico de Sega Genesis." }] },
  { id: 10, title: "Castlevania: Symphony of the Night", studio: "Konami", authors: ["Toru Hagihara", "Koji Igarashi"], price: 15999, category: "Acción", year: 1997, stock: true, currency: "ARS", img: "", description: "Castlevania: Symphony of the Night es uno de los mejores videojuegos de la historia. Controlá a Alucard, hijo de Drácula, en un inmenso castillo lleno de secretos.", reviews: [{ user: "VampireHunter", stars: 5, text: "What is a man? ¡Una obra maestra!" }] },
  { id: 11, title: "Mega Man 2", studio: "Capcom", authors: ["Akira Kitamura"], price: 5999, category: "Plataformas", year: 1988, stock: true, currency: "ARS", img: "", description: "Mega Man 2 es considerado el mejor juego de la serie Mega Man. Con 8 Robot Masters únicos y una banda sonora legendaria, es un must-have para cualquier coleccionista.", reviews: [{ user: "MegaFan", stars: 5, text: "La mejor banda sonora de NES. ¡Un clásico!" }] },
  { id: 12, title: "FIFA 98", studio: "EA Sports", authors: ["EA Canada"], price: 4999, category: "Deportes", year: 1997, stock: true, currency: "ARS", img: "", description: "FIFA 98: Road to World Cup es uno de los mejores juegos de fútbol de su época. Con licencias oficiales del Mundial de Francia 98 y 172 equipos nacionales.", reviews: [{ user: "FutbolRetro", stars: 4, text: "Recuerdos de la infancia. ¡Qué juego!" }] }
];
const CATEGORIES = ["Todos", "Acción", "Deportes", "Terror", "Peleas", "Plataformas", "Arcade"];
let cart = JSON.parse(localStorage.getItem('rg_cart') || '[]');

function getGameImage(game) {
  if (game.img && game.img.trim() !== '') return game.img;
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect width='300' height='200' fill='%231a1a2e'/%3E%3Ctext x='150' y='100' font-family='Arial' font-size='18' fill='%2300b4d8' text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(game.title)}%3C/text%3E%3Ctext x='150' y='130' font-family='Arial' font-size='12' fill='%23666' text-anchor='middle' dominant-baseline='middle'%3ESin imagen%3C/text%3E%3C/svg%3E`;
}
function getCartImage(item) {
  if (item.img && item.img.trim() !== '') return item.img;
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52'%3E%3Crect width='60' height='52' fill='%231a1a2e'/%3E%3Ctext x='30' y='26' font-family='Arial' font-size='8' fill='%2300b4d8' text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(item.title.substring(0, 10))}%3C/text%3E%3C/svg%3E`;
}
function saveCart() { localStorage.setItem('rg_cart', JSON.stringify(cart)); actualizarUICarrito(); }
function actualizarUICarrito() {
  const badge = document.getElementById('cartBadge');
  const cartItems = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const totalQty = cart.reduce((acc, i) => acc + i.qty, 0);
  if (badge) badge.textContent = totalQty;
  if (!cartItems) return;
  if (cart.length === 0) {
    cartItems.innerHTML = `<div class="cart-empty"><span class="empty-icon">🛒</span><span>Tu carrito está vacío</span></div>`;
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }
  if (cartFooter) cartFooter.style.display = 'block';
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img"><img src="${getCartImage(item)}" alt="${item.title}" /></div>
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
        <button class="btn-remove" onclick="removeFromCart(${item.id})"><i class="bi bi-trash3"></i></button>
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
  if (existing) existing.qty++;
  else cart.push({ id: game.id, title: game.title, price: game.price, img: game.img, qty: 1 });
  saveCart();
  mostrarNotificacion(`"${game.title}" agregado al carrito`);
  abrirCarrito();
}
function removeFromCart(gameId) { cart = cart.filter(i => i.id !== gameId); saveCart(); }
function changeQty(gameId, delta) {
  const item = cart.find(i => i.id === gameId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== gameId);
  saveCart();
}
function clearCart() { cart = []; saveCart(); }
function formatPrice(n) { return n.toLocaleString('es-AR', { minimumFractionDigits: 2 }); }
function abrirCarrito() { document.getElementById('cartOverlay')?.classList.add('open'); }
function cerrarCarrito() { document.getElementById('cartOverlay')?.classList.remove('open'); }
function mostrarNotificacion(msg) {
  const toast = document.getElementById('toastMsg');
  const text = document.getElementById('toastText');
  if (!toast) return;
  if (text) text.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
function irAlJuego2(game) {
  const stockBadge = game.stock ? '' : '<div style="position:absolute;top:8px;left:8px;background:rgba(230,57,70,0.85);color:#fff;font-size:0.7rem;font-weight:700;padding:2px 8px;border-radius:20px;font-family:\'Exo 2\',sans-serif;">Sin Stock</div>';
  return `
    <div class="game-card" onclick="irAlProducto(${game.id})">
      <div class="game-card-img">
        <img src="${getGameImage(game)}" alt="${game.title}" loading="lazy" />
        ${stockBadge}
        <div class="game-overlay"><span class="overlay-btn">VER DETALLE</span></div>
      </div>
      <div class="game-card-body">
        <div class="game-title">${game.title}</div>
        <div class="game-studio">${game.authors.join(', ')}</div>
        <div class="game-card-footer">
          <span class="game-price">$ ${formatPrice(game.price)}</span>
          <button class="btn-cart-add ${!game.stock ? 'disabled' : ''}" 
            onclick="event.stopPropagation(); ${game.stock ? `agregarAlCarrito(${game.id})` : ''}" 
            title="${game.stock ? 'Agregar al carrito' : 'Sin stock'}"
            ${!game.stock ? 'disabled' : ''}>
            <i class="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}
function irAlJuego(game) {
  const stockBadge = game.stock ? '' : '<div style="position:absolute;top:8px;left:8px;background:rgba(230,57,70,0.85);color:#fff;font-size:0.7rem;font-weight:700;padding:2px 8px;border-radius:20px;font-family:\'Exo 2\',sans-serif;">Sin Stock</div>';
  return `
    <div class="game-card" onclick="irAlProducto2(${game.id})">
      <div class="game-card-img">
        <img src="${getGameImage(game)}" alt="${game.title}" loading="lazy" />
        ${stockBadge}
        <div class="game-overlay"><span class="overlay-btn">VER DETALLE</span></div>
      </div>
      <div class="game-card-body">
        <div class="game-title">${game.title}</div>
        <div class="game-studio">${game.authors.join(', ')}</div>
        <div class="game-card-footer">
          <span class="game-price">$ ${formatPrice(game.price)}</span>
          <button class="btn-cart-add ${!game.stock ? 'disabled' : ''}" 
            onclick="event.stopPropagation(); ${game.stock ? `agregarAlCarrito(${game.id})` : ''}" 
            title="${game.stock ? 'Agregar al carrito' : 'Sin stock'}"
            ${!game.stock ? 'disabled' : ''}>
            <i class="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}
function irAlProducto(gameId) { window.location.href = `producto.html?id=${gameId}`; }
function irAlProducto2(gameId) { window.location.href = `pages/producto.html?id=${gameId}`; }
function getQueryParam(param) { return new URL(window.location.href).searchParams.get(param); }

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('abrirCarritoBtn');
  const closeBtn = document.getElementById('cerrarCarritoBtn');
  const overlay = document.getElementById('cartOverlay');
  if (openBtn) openBtn.addEventListener('click', abrirCarrito);
  if (closeBtn) closeBtn.addEventListener('click', cerrarCarrito);
  if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) cerrarCarrito(); });
  actualizarUICarrito();
});