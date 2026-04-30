// cart.js — Cart state management via localStorage

const CART_KEY = 'cloth_cart';

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(productId, size) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === productId && i.size === size);
  if (idx !== -1) {
    cart[idx].qty += 1;
  } else {
    cart.push({ id: productId, size: size, qty: 1 });
  }
  saveCart(cart);
  updateNavBadges();
}

function removeFromCart(productId, size) {
  let cart = getCart();
  cart = cart.filter(i => !(i.id === productId && i.size === size));
  saveCart(cart);
  updateNavBadges();
}

function updateQty(productId, size, qty) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === productId && i.size === size);
  if (idx !== -1) {
    if (qty <= 0) {
      cart.splice(idx, 1);
    } else {
      cart[idx].qty = qty;
    }
  }
  saveCart(cart);
  updateNavBadges();
}

function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, i) => {
    const product = PRODUCTS.find(p => p.id === i.id);
    return sum + (product ? product.price * i.qty : 0);
  }, 0);
}

function clearCart() {
  saveCart([]);
  updateNavBadges();
}

// Wishlist helpers
const WISHLIST_KEY = 'cloth_wishlist';

function getWishlist() {
  try { return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || []; }
  catch { return []; }
}

function saveWishlist(list) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
}

function addToWishlist(productId) {
  const list = getWishlist();
  if (!list.includes(productId)) { list.push(productId); saveWishlist(list); }
  updateNavBadges();
}

function removeFromWishlist(productId) {
  const list = getWishlist().filter(id => id !== productId);
  saveWishlist(list);
  updateNavBadges();
}

function toggleWishlist(productId) {
  const list = getWishlist();
  if (list.includes(productId)) { removeFromWishlist(productId); return false; }
  else { addToWishlist(productId); return true; }
}

function isWishlisted(productId) { return getWishlist().includes(productId); }
function getWishlistCount() { return getWishlist().length; }

// Nav badges
function updateNavBadges() {
  const cartBadge = document.getElementById('cart-badge');
  const wishBadge = document.getElementById('wish-badge');
  const cartCount = getCartCount();
  const wishCount = getWishlistCount();
  if (cartBadge) {
    cartBadge.textContent = cartCount;
    cartBadge.classList.toggle('visible', cartCount > 0);
  }
  if (wishBadge) {
    wishBadge.textContent = wishCount;
    wishBadge.classList.toggle('visible', wishCount > 0);
  }
}

// Toast notification
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 2900);
}

// Format currency
function formatPrice(n) { return '₹' + Math.round(n).toLocaleString('en-IN'); }

// Init badges on every page load
document.addEventListener('DOMContentLoaded', updateNavBadges);
