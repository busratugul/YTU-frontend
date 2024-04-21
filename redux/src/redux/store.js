import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import undoReducer from './undoSlice'

export default configureStore({
    reducer: {
        tds: todoReducer,
        undos: undoReducer
    },
    middleware:(getDefaultMiddleWare) => 
    getDefaultMiddleWare({
        serializableCheck: false
    })
})