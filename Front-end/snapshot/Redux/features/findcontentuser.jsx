import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from "cookies-next";

const initialState = {
  loading: false,
  content: [],
  error: null, 
};

const cookie = getCookie('token');

export const finduser = createAsyncThunk('user/finduser', async (id) => {
  // try {
    const res = await axios.post('http://127.0.0.1:3001/api/user/contentUser',{
      id:id


    },{
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });
    return res.data;
  // } catch (error) {
  //   console.error('Error fetching user:', error);
  //   throw error;
  // }
});

const userslice = createSlice({
  name: 'service',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(finduser.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error when a new request starts
      })
      .addCase(finduser.fulfilled, (state, action) => {
        state.loading = false;
        state.content = action.payload;
        state.error = null; // Reset error on success
      })
      .addCase(finduser.rejected, (state, action) => {
        state.loading = true;
        state.content = [];
        state.error = action.error.message;
      });
  },
});

export default userslice.reducer;