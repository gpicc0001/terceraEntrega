import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        user:"guillermo",
        items: [],
        total: null,
        updateAt:""
    }
}


export const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers:{
        addItems: (state, actions)=> {
            state.value.items.push({...actions.payload,quantity:1})
            console.log(state);
        },
        removeItem: () =>{

        }
    }

})

export const {addItems, removeItem} = cartSlice.actions

export default cartSlice.reducer