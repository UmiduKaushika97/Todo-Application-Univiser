import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// structure of a single todo item
export interface Todo {
    id: number;
    text: string;
}

// structure for the todo slice
interface TodosState {
    todos: Todo[];
    search: string;
}

// initialstate empty todo list and empty search
const initialState: TodosState = {
    todos:[],
    search: '',
}

// slice for todos
const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

        // add Todo
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },

        // update todo
        updateTodo: (state, action: PayloadAction<Todo>) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        },

        // delete todo
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        // search todo
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    }
});

export const {addTodo, updateTodo, deleteTodo, setSearch} = todosSlice.actions;
export default todosSlice.reducer;