import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todoSlice'  // ← Add '/todo' to the path

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
});