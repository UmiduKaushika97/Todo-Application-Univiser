import { useState } from "react";
import { RootState } from "../../Store/Store";
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo, setSearch, updateTodo } from "../../Actions/todosSlice";



const TodoForm: React.FC = () => {
    const dispatch = useDispatch();
    const { todos, search } = useSelector((state: RootState) => state.todos);
    const [editTodoId, setEditTodoId] = useState<number | null>(null);
    const [newTodoText, setNewTodoText] = useState<string>("");
    const [editedText, setEditedText] = useState<string>("");

    const filteredTodos = todos.filter((todo) => 
    todo.text.toLowerCase().includes(search.toLowerCase())
);

// adding a new Todo
    const handleAddClick = () => {
        if (newTodoText.trim()) {
            dispatch(addTodo({ id: Date.now(), text: newTodoText }));
            setNewTodoText("");
        }
    }

    // todo edit
    const handleEditClick = (todoId: number, text: string) => {
        setEditTodoId(todoId);
        setEditedText(text);
    }

    // update todo
    const handleUpdateClick = (todoId : number) => {
        if (editedText.trim()) {
            dispatch(updateTodo({ id: todoId, text: editedText }));
            setEditTodoId(null);
        }else {
            alert("Can not be empty");
        }
    };

  return (
    <div>
        <h1>Todo App</h1>

        <input 
        type="text"
        placeholder="Search todos"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        />

        <div>
            <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Enter a new todo"
            />
            <button onClick={handleAddClick} className="addbutton">Add</button>
        </div>

        <div className="container-card">
        {filteredTodos.map((todo) => 
        <ul className="card" key={todo.id}>
            <li>
                {editTodoId === todo.id ? (
                    <div>
                        <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        />
                        <button
                        onClick={() => handleUpdateClick(todo.id)}
                        className="UpdateButton">
                            Update
                        </button>
                    </div>
                ) : (
                    <span>{todo.text}</span>
                )}

                {editTodoId !== todo.id && (
                    <div>
                        <button
                        onClick={() => handleEditClick(todo.id, todo.text)}>
                            Edit
                        </button>

                        <button
                        onClick={() => dispatch(deleteTodo(todo.id))}>
                            Delete
                        </button>
                    </div>
                )}
            </li>
        </ul>)}
        </div>

    </div>

    
  )
}

export default TodoForm