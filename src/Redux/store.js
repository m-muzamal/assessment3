import { configureStore } from '@reduxjs/toolkit'
import { newsApi } from './apiSlice/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import dataSlice from './dataSclice/dataSlice'

export const store = configureStore({
    reducer: {
        data: dataSlice,
        [newsApi.reducerPath]: newsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(newsApi.middleware),
})

setupListeners(store.dispatch)