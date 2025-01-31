import {configureStore} from '@reduxjs/toolkit'
import { Todoreducers } from '../Features/Todo/todoSlice'

export const store = configureStore({
    reducer: Todoreducers
})