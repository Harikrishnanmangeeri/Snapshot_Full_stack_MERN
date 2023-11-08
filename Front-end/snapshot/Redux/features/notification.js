import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from "cookies-next";

const initialState = {

  notification:'',
  shownotification:[],
};

const cookie = getCookie('token');

export const addComment = createAsyncThunk('user/notification', async ({id,user_id,comment}) => {
  
  // try {
    const res = await axios.post('http://127.0.0.1:3001/api/user/comment',{
      
    comment:comment,
    user_id:user_id,
    _id:id

    },{
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });
    return res.data;
 
});

export const showcomments = createAsyncThunk('user/shownotification', async (id) => {
 
  // try {
    const res = await axios.post('http://127.0.0.1:3001/api/user/showcomment',{
    _id:id

    },{
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });
    return res.data;
  
});

const notificationslice = createSlice({
  name: 'notification',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addComment.fulfilled, (state, action) => {
       
        state.comment = action.payload;
      
      })

      .addCase(showcomments.fulfilled, (state, action) => {
       
        state.showcomment = action.payload;
   
      
      })
  },
});

export default notificationslice.reducer;