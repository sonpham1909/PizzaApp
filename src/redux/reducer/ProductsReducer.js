import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts,toggleTodoApi, toggleproApi } from "../action/ActionProducts";





//Thiết lập cho reducer và định nghĩa các hàm
const initialState = {
    listProducts: [],
    loading: false,
    error: null,
  };
  
  const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      addProduct: (state, action) => {
        // Xử lý logic để thêm sản phẩm vào danh sách
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.listProducts = action.payload;
          state.loading = false;
          state.error = null;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });

        builder.addCase(toggleproApi.fulfilled, (state, action)=>{
          // lấy tham số truyền vào
          // console.log(action);
          const { id,  status } = action.payload;
          // tìm bản ghi phù hợp với tham số truyền vào
          const todo = state.listProducts.find(row => row.id === id);
          // update
          
          if (todo) {
            const updatedTodo = { ...todo, fv: status }; // Tạo đối tượng mới với thuộc tính fv được cập nhật
            const index = state.listProducts.findIndex(row => row.id === id);
            state.listProducts[index] = updatedTodo; // Cập nhật lại đối tượng todo trong mảng listTodo
          }
       
        })
    },
  });
  
  export const { addProduct } = productsSlice.actions;
  export default productsSlice.reducer;


