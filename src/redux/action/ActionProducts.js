
import { addProduct } from '../reducer/ProductsReducer';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const api_url = 'http://192.168.51.106:3000/products';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products: ', error);
      throw error;
    }
  }
);

 
export const toggleproApi = createAsyncThunk(
  'products/toggleTodoApi',
  async (objUpdate, thunkAPI) => {
    try {
      const response = await fetch(`${api_url}/${objUpdate.id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objUpdate.data)
      });

      const data = await response.json();

      if (response.ok) {
        // Cập nhật lại todo trong mảng listTodo
        return { id: objUpdate.id, data: data };
      } else {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);