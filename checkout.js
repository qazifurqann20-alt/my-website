// checkout.js — Form validation and order flow

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('checkout-form');
  const confirmationScreen = document.getElementById('confirmation-screen');
  const checkoutContent = document.getElementById('checkout-content');

  // Render order summary sidebar
  renderCheckoutSummary();

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm()) {
        placeOrder();
      }
    });
  }

  // Live validation on blur
  document.querySelectorAll('input[required]').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) validateField(input);
    });
  });
});

function renderCheckoutSummary() {
  const cart = getCart();
  const itemListEl = document.getElementById('checkout-items');
  const subtotalEl = document.getElementById('co-subtotal');
  const shippingEl = document.getElementById('co-shipping');
  const totalEl = document.getElementById('co-total');

  if (!itemListEl) return;

  if (cart.length === 0) {
    itemListEl.innerHTML = '<p style="font-size:13px;color:var(--color-text-muted);text-align:center;padding:20px 0">Your cart is empty</p>';
  } else {
    itemListEl.innerHTML = cart.map(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      if (!product) return '';
      return `
        <div class="checkout-item">
          <div class="checkout-item-thumb">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
          </div>
          <div style="flex:1;min-width:0">
            <div class="checkout-item-name">${product.name}</div>
            <div class="checkout-item-sub">${item.size} · Qty ${item.qty}</div>
          </div>
          <div class="checkout-item-price">${formatPrice(product.price * item.qty)}</div>
        </div>
      `;
    }).join('');
  }

  const subtotal = getCartTotal();
  const shipping = subtotal >= 12599 ? 0 : 999;
  const total = subtotal + shipping;

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (shippingEl) shippingEl.innerHTML = shipping === 0 ? '<span class="free">Free</span>' : formatPrice(shipping);
  if (totalEl) totalEl.textContent = formatPrice(total);
}

function validateField(input) {
  const errorEl = document.getElementById(input.id + '-error');
  let msg = '';

  if (!input.value.trim()) {
    msg = 'This field is required.';
  } else if (input.type === 'email') {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) msg = 'Please enter a valid email address.';
  } else if (input.id === 'card-number') {
    if (!/^\d{13,19}$/.test(input.value.replace(/\s/g, ''))) msg = 'Enter a valid 16-digit card number.';
  } else if (input.id === 'card-expiry') {
    if (!/^\d{2}\/\d{2}$/.test(input.value)) msg = 'Use MM/YY format.';
  } else if (input.id === 'card-cvv') {
    if (!/^\d{3,4}$/.test(input.value)) msg = 'Enter a 3 or 4-digit CVV.';
  } else if (input.id === 'postal-code') {
    if (input.value.trim().length < 3) msg = 'Enter a valid postal code.';
  } else if (input.id === 'phone') {
    if (!/^\+?[\d\s\-]{7,15}$/.test(input.value)) msg = 'Enter a valid phone number.';
  }

  input.classList.toggle('error', !!msg);
  if (errorEl) errorEl.textContent = msg;
  return !msg;
}

function validateForm() {
  const inputs = document.querySelectorAll('input[required]');
  let valid = true;
  inputs.forEach(input => { if (!validateField(input)) valid = false; });
  return valid;
}

function placeOrder() {
  const cart = getCart();
  if (cart.length === 0) { showToast('Add items to your cart first.'); return; }
  const orderNum = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  clearCart();
  document.getElementById('order-number').textContent = orderNum;
  const checkoutContent = document.getElementById('checkout-content');
  const confirmationScreen = document.getElementById('confirmation-screen');
  if (checkoutContent) checkoutContent.style.display = 'none';
  if (confirmationScreen) confirmationScreen.classList.add('visible');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Auto-format card number with spaces
document.addEventListener('DOMContentLoaded', () => {
  const cardNum = document.getElementById('card-number');
  if (cardNum) {
    cardNum.addEventListener('input', () => {
      let v = cardNum.value.replace(/\D/g, '').substring(0, 16);
      cardNum.value = v.replace(/(.{4})/g, '$1 ').trim();
    });
  }
  const cardExp = document.getElementById('card-expiry');
  if (cardExp) {
    cardExp.addEventListener('input', () => {
      let v = cardExp.value.replace(/\D/g, '').substring(0, 4);
      if (v.length >= 3) v = v.substring(0, 2) + '/' + v.substring(2);
      cardExp.value = v;
    });
  }
});
