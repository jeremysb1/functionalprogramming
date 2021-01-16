//Implement a cart feature

const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

let shoppingHistory =[]

const compose = (f, g) => (...args) => f(g(...args));

purchaseItem(
  emptyCart,
  buyItem,
  applyTax,
  addItemToCart
)(user, {name: 'laptop', price: 1000})

function purchaseItem(...fns) {
  return fns.reduce(compose)
} 

// Add items to cart.

function addItemToCart(user, item) {
  shoppingHistory.push(user)
  const updateCart = user.cart.concat(item)
  return Object.assign({}, user, { cart: updateCart })
}

// Add 3% tax to item in cart

function applyTax(user) {
  const {cart} = user;
  const taxRate = 1.03;
  const updatedCart = cart.map(item => {
    return {
      name: item.name,
      price: item.price * taxRate
    }
  })
  return Object.assign({}, user, { cart: updatedCart })
}

// Buy item: cart --> purchases

function buyItem(user) {
  shoppingHistory.push(user)
  return Object.assign({}, user, { purchases: user.cart})
}

// Empty cart

function emptyCart(user) {
  shoppingHistory.push(user)
  return Object.assign({}, user, { cart: [] })
}
