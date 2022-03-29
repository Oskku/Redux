import {  createSlice } from "@reduxjs/toolkit";




let lastId = 0;
const slice = createSlice(
    {
        name:"users",
        initialState:[],
        reducers:{
            addUser:(state,action)=>{
                state.push({
                    id: ++lastId,
                    username:action.payload.username
                })
            }
        }

    }
)

export const {addUser} = slice.actions
export default slice.reducer