import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',
    initialState:{value:[]},
    reducers:{
        add:(state)=>{state.value.push(action.payload) }
    }
})

export const {add}=cartSlice.actions;
export default cartSlice.reducer;