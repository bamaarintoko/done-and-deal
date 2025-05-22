import { createSlice } from "@reduxjs/toolkit";

interface Auth {
    email: string;
    password: string;
    token: string;
}

interface AuthState {
    data: Auth;
}

const initialState: AuthState = {
    data: {
        email: '',
        password: '',
        token: ''
    }
};

const sliceAuth = createSlice({
    name: 'sliceAuth',
    initialState,
    reducers: {
        storeUser(state, action) {
            state.data = action.payload
        },
        clearUser(state) {
            state.data = {
                email: '',
                password: '',
                token: ''
            }
        }
        // state.data.push(action.payload)
    },

})

export const { storeUser, clearUser} = sliceAuth.actions
export default sliceAuth.reducer