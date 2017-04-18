const initialState = {
  products: [
    { name: "Thing1", price: 5, id:'P123' },
    { name: "Thing2", price: 11, id:'P456' }
  ],
  cartItems: [
    { name: "Thing1", price: 5, id:'C123' },
    { name: "Thing2", price: 11, id:'C456' }
  ]
};

export default function AppReducer (state, action) {
  if (state === undefined) {
    return initialState;
  }

  return state;
}
