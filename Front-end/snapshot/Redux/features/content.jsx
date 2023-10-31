'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState={
user:''
}

const ContentRedux = createSlice(
{
    name:'content',
    initialState:initialState,
    reducers:{
        content:(state,actions)=>{
            state.user=actions.payload
        }
    } 
}

)
export const {content}=ContentRedux.actions
export default ContentRedux.reducer