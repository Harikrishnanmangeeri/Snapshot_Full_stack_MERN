import { configureStore } from '@reduxjs/toolkit'
import Content from './features/content'
export const store =configureStore({
    reducer: {
        content:Content
    }
})

