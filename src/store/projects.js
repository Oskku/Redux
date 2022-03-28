import {  createSlice } from "@reduxjs/toolkit";




let lastId = 0;
const slice = createSlice(
    {
        name:"projects",
        initialState:[],
        reducers:{
            addProject:(state,action)=>{
                state.push({
                    id: ++lastId,
                    projectName:action.payload.name
                })
            }
        }

    }
)

export const {addProject} = slice.actions
export default slice.reducer