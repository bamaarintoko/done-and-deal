import { createSlice } from '@reduxjs/toolkit'

const doneanddeal = createSlice({
    name: 'doneanddeal',
    initialState: {
        data: {}
    },
    reducers: {
        storeData: () => { }
    }
})

export const {
    storeData
} = doneanddeal.actions

export default doneanddeal.reducer