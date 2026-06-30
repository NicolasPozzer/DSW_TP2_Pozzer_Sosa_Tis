if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);
 
function irAlJuego2(game) {
  const stockBadge = game.stock
    ? ''
    : '<div style="position:absolute;top:8px;left:8px;background:rgba(230,57,70,0.85);color:#fff;font-size:0.7rem;font-weight:700;padding:2px 8px;border-radius:20px;font-family:\'Exo 2\',sans-serif;">Sin Stock</div>';

  return `
    <article class="game-card" onclick="irAlProducto(${game.id})">
      <div class="game-card-img">
        <img src="${game.img}" alt="${game.title}" onerror="this.src='https://via.placeholder.com/300x200/1a1a2e/00b4d8?text=${encodeURIComponent(game.title)}'" loading="lazy" />
        ${stockBadge}
        <div class="game-overlay">
          <span class="overlay-btn">VER DETALLE</span>
        </div>
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
    </article>
  `;
}

function irAlJuego(game) {
    const stockBadge = game.stock
        ? ''
        : '<div style="position:absolute;top:8px;left:8px;background:rgba(230,57,70,0.85);color:#fff;font-size:0.7rem;font-weight:700;padding:2px 8px;border-radius:20px;font-family:\'Exo 2\',sans-serif;">Sin Stock</div>';

    return `
    <article class="game-card" onclick="irAlProducto2(${game.id})">
      <div class="game-card-img">
        <img src="${game.img}" alt="${game.title}" onerror="this.src='https://via.placeholder.com/300x200/1a1a2e/00b4d8?text=${encodeURIComponent(game.title)}'" loading="lazy" />
        ${stockBadge}
        <div class="game-overlay">
          <span class="overlay-btn">VER DETALLE</span>
        </div>
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
    </article>
  `;
}

function initCartButtons(container) {

}

function irAlProducto(gameId) {
  window.location.href = `producto.html?id=${gameId}`;
}

function irAlProducto2(gameId) {
    window.location.href = `pages/producto.html?id=${gameId}`;
}

function getQueryParam(param) {
  const url = new URL(window.location.href);
  return url.searchParams.get(param);
}


document.addEventListener('DOMContentLoaded', () => {
  const tooltipTriggers = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggers.forEach(el => new bootstrap.Tooltip(el));
});