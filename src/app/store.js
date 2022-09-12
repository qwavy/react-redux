import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'
import postsReducer from '../features/postsSlice'
import countriesReducer from '../features/countriesSlice'
import quotaReducer from '../features/quotaSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts:postsReducer,
        countries:countriesReducer,
        quota:quotaReducer
    }
})