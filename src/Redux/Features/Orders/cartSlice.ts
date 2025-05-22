import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface ICart {
  productId: string;
  quantity: number;
  totalPrice: number;
  title: string;
}

const initialState: {
  items: ICart[];
  orderedItems: ICart[];
  orderId: string | undefined;
} = {
  items: [],
  orderedItems: [],
  orderId: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      const existingProduct = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (existingProduct) {
        const index = state.items.findIndex(
          (current) => current.productId === existingProduct.productId
        );
        state.items[index].quantity += Number(action.payload.quantity);
        state.items[index].totalPrice += Number(action.payload.totalPrice);
      } else {
        state.items.push({
          ...action.payload,
          quantity: Number(action.payload.quantity),
          totalPrice: Number(action.payload.totalPrice),
        });
      }
    },
    addToOrderedList: (state, action) => {
      state.orderedItems = [...state.items];
      console.log(action.payload);
      state.orderId = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const getCart = (state: RootState) => state.cart;

export const { addToCart, clearCart, addToOrderedList } = cartSlice.actions;
export default cartSlice.reducer;
