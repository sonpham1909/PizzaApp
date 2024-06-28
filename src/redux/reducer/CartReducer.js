import { createSlice } from "@reduxjs/toolkit";

import { addProductApi,deleteAllProductsApi,deleteProductApi,fetchCart,toggleTodoApi } from "../action/ActionCart";
import { toggleproApi } from "../action/ActionProducts";


const initialState = {
  listCart:[]
}



const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.listCart.push(action.payload);
    },
  },
  extraReducers: (builder) => {

    builder
    .addCase(fetchCart.pending, (state) => {
 
    })
    .addCase(fetchCart.fulfilled, (state, action) => {
      state.listCart = action.payload;
     
    })
    .addCase(fetchCart.rejected, (state, action) => {
     

    });

   builder.addCase(toggleTodoApi.fulfilled, (state, action)=>{
          // lấy tham số truyền vào
          // console.log(action);
          const { id,  status } = action.payload;
          // tìm bản ghi phù hợp với tham số truyền vào
          const todo = state.listCart.find(row => row.id === id);
          // update
          
          if (todo) {
            const updatedTodo = { ...todo, quanlity: status }; // Tạo đối tượng mới với thuộc tính fv được cập nhật
            const index = state.listCart.findIndex(row => row.id === id);
            state.listCart[index] = updatedTodo; // Cập nhật lại đối tượng todo trong mảng listTodo
          }
       
        });

        builder.addCase(deleteProductApi.fulfilled, (state, action) => {
          // Xóa todo cụ bộ trên store để không phải load lại danh sách
           state.listCart = state.listCart.filter(row => row.id !== action.payload);
         
      }) .addCase(deleteProductApi.rejected, (state, action) => {
          // Xử lý khi yêu cầu xóa todo bị từ chối hoặc xảy ra lỗi
          console.log('Delete todo rejected:', action.error.message);
        });



        builder
        // ...your other cases...
  
        .addCase(deleteAllProductsApi.pending, (state) => {
          // Handle pending state if needed
        })
        .addCase(deleteAllProductsApi.fulfilled, (state, action) => {
          // Reset the listCart array to an empty array
          state.listCart = [];
        })
        .addCase(deleteAllProductsApi.rejected, (state, action) => {
          // Handle the rejection or error if needed
        });


  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;