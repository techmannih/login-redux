import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../feature/useslice'

export default configureStore({
    reducer:{
        user:userReducer,
    },
});