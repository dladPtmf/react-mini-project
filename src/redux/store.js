// npm i react-redux @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from "./movieSlice"

const store = configureStore({
    reducer : {
      movies : movieReducer  
    } // 창고지기
})

export default store;