import { configureStore } from "@reduxjs/toolkit";
import todosReducer from '../Actions/todosSlice';

// configure the redux store
export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;