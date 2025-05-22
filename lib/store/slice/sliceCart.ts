
import { Product } from "@/lib/interface";
import { createSlice } from "@reduxjs/toolkit";

interface Cart {
    qty: number;
    item: Product;
    totalPrice: number;
    createAt: string;
}

interface CartState {
    data: Cart[];
}

const initialState: CartState = {
    data: []
};

const sliceCart = createSlice({
    name: 'sliceCart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem: Product = action.payload;
            const existingCartItem = state.data.find(cart => cart.item.id === newItem.id);

            if (existingCartItem) {
                existingCartItem.qty += 1;
                existingCartItem.totalPrice = existingCartItem.qty * existingCartItem.item.price;
            } else {
                state.data.push({
                    item: newItem,
                    qty: 1,
                    totalPrice: newItem.price,

                    createAt: new Date().toISOString()
                });
            }
        },
        clearCart(state) {
            state.data = []
        }
        // state.data.push(action.payload)
    },

})

export const { addToCart, clearCart} = sliceCart.actions
export default sliceCart.reducer

