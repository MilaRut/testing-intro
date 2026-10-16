function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  if (quantity <= 0) {
    throw new RangeError('Недопустимое количество');
  }

  const productInCart = cart.find(el => el.id === product.id);
  const currentQuantity = productInCart ? productInCart.quantity : 0;
  if (product.stock < quantity + currentQuantity) {
    throw new RangeError('Больше добавить нельзя');
  }

  if (productInCart) {
    return cart.map((el) =>
      el.id === product.id
        ? { ...el, quantity: el.quantity + quantity }
        : el
    );
  }

  return [...cart, { ...product, quantity }];
}

function changeQuantity(cart, id, quantity) {
  if (quantity <= 0) {
    throw new RangeError();
  }
  const productInCart = cart.find(el => el.id === id);

  if (!productInCart) {
    return [...cart];
  }

  if (productInCart.stock < quantity) {
    throw new RangeError('Больше добавить нельзя');
  }

  return cart.map((el) =>
    el.id === id
      ? { ...el, quantity }
      : el
  );
}

function removeFromCart(cart, id) {
  return cart.filter((el) => el.id !== id);
}

function calculateCartSubtotal(cart) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return subtotal;
}

function calculateOrderTotal(cart, promo) {
  const subtotal = calculateCartSubtotal(cart);
  const discount = promo.trim() === 'SAVE10' && subtotal >= 20000 ? subtotal * 0.1 : 0;
  const delivery = subtotal >= 50000 ? 0 : 30000;
  const total = subtotal - discount + delivery;
  return { subtotal, discount, delivery, total };
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
