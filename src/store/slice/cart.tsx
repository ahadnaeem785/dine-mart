import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CartState {
  items : Array<any>,
  totalAmount : number,
  totalQuantity : number,
}

// Define the initial state using that type
const initialState: CartState = {
  items : [],
  totalAmount : 0,
  totalQuantity : 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state:any,action) => {
      state.totalQuantity += action.payload.quantity
    },
    deleteCart: (state:any,action) => {
      state.totalQuantity -= action.payload.quantity
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    clearCart: (state:any) => {
      state = initialState;
    },
  },
})

export const { addToCart, deleteCart, clearCart } = cartSlice.actions

export default cartSlice.reducer  