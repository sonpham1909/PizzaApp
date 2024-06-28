import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../reducer/ProductsReducer";
import CartReducer from "../reducer/CartReducer";


export default configureStore({
    reducer:{
        listProduct:ProductsReducer,
        listCart:CartReducer,
    },
})