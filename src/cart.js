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

function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
