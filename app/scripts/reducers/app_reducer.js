const initialState = {
  products: [
    { name: "Thing1", price: 5, id:'P123' },
    { name: "Thing2", price: 11, id:'P456' },
    { name: "Thing3", price: 10, id:'P789' },
    { name: "Thing4", price: 12, id:'P345' },
    { name: "Thing5", price: 15, id:'P567' }
  ],
  cartItems: [],
  cartTotal: 0
};

export default function AppReducer (state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch(action.type) {
    case "ADD_ITEM":
      const newItem = action.product;
      let cartItems = state.cartItems;
      cartItems.push(newItem);
      return Object.assign({}, state, { cartItems: cartItems });

    case "DELETE_ITEM":
      let oldCart = state.cartItems;
      const itemIndex = oldCart.indexOf(action.cartItem);
      oldCart.splice(itemIndex, 1);
      return Object.assign({}, state, { cartItems: oldCart });

    case "UPDATE_TOTAL":
      let total = 0;
      state.cartItems.forEach(function(item){
        total += item.price
      })
      return Object.assign({}, state, { cartTotal: total });

    default:
      return state;
  }
}
