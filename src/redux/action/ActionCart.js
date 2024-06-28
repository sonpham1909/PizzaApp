
import { addProduct } from '../reducer/ProductsReducer';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const api_url = 'http://192.168.51.106:3000/cart';

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
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


 
export const toggleTodoApi = createAsyncThunk(
  'cart/toggleTodoApi',
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

export const deleteProductApi = createAsyncThunk(
    'cart/deleteProductApi',
    async (productId, thunkAPI) => {
      try {
        const response = await fetch(`${api_url}/${productId}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          // Xóa sản phẩm thành công
          return productId;
        } else {
          const errorData = await response.json();
          return thunkAPI.rejectWithValue(errorData);
        }
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const addProductApi = createAsyncThunk(
    'cart/addProductApi',
    async (product, thunkAPI) => {
      try {
        const response = await fetch(api_url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(product)
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Thêm sản phẩm thành công
          return data;
        } else {
          const errorData = await response.json();
          return thunkAPI.rejectWithValue(errorData);
        }
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const deleteAllProductsApi = createAsyncThunk(
    'cart/deleteAllProductsApi',
    async (_, thunkAPI) => {
      try {
        const response = await fetch(api_url, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          // Xóa tất cả sản phẩm thành công
          return true;
        } else {
          const errorData = await response.json();
          return thunkAPI.rejectWithValue(errorData);
        }
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

