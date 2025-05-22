import { createSlice } from '@reduxjs/toolkit'

const doneanddeal = createSlice({
    name: 'doneanddeal',
    initialState: {
        data: {}
    },
    reducers: {
        storeData: (state, action) => { }
    }
})

export const {
    storeData
} = doneanddeal.actions

export default doneanddeal.reducer