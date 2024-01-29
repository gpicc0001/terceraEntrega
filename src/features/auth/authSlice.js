import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        email: null,
        idToken: null,
        localId:null // me sirve para identificarlo 
    }
}


export const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducers:{
        setUser: (state, action) => {
            state.value.email = action.payload.email
            state.value.idToken = action.payload.idToken
            state.value.localId = action.payload.localId
            console.log(state.value);
        }
        // clearUser: (state) => {
            // AGREGAR UN BOTON EN LA PANTALLA MAIN PARA QUE EJECUTE EL CLEAR USER.
            // state.value.email = null
            // state.value.idToken = null

        // }
    }

})

export const { setUser } = authSlice.actions

export default authSlice.reducer