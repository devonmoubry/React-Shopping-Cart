const initialState = {
  products: [
    { name: "Thing1", price: 5 },
    { name: "Thing2", price: 11 }
  ],
  cartItems: [
    { name: "Thing1", price: 5 },
    { name: "Thing2", price: 11 }
  ]
};

export default function AppReducer (state, action) {
  if (state === undefined) {
    return initialState;
  }

  return state;
}
