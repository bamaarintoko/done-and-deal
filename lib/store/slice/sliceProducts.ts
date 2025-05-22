import { products } from "@/lib/dummy";
import { Product } from "@/lib/interface";
import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
    data: Product[];
}

const initialState: ProductState = {
    data: products
};

const sliceProducts = createSlice({
    name: 'sliceProducts',
    initialState,
    reducers: {
        createProduct(state, action) {
            // state.data.push(action.payload)
        },
    }
})

export const { createProduct, } = sliceProducts.actions
export default sliceProducts.reducer 

