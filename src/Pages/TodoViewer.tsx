import { RootState } from "../Store/Store";
import { useDispatch, useSelector } from "react-redux"
import { setSearch } from "../Actions/todosSlice";
import './TodoViewer.css'


const TodoViewer:React.FC = () => {
    const dispatch = useDispatch();
    const { todos, search } = useSelector((state: RootState) => state.todos);

    const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
);
  return (
    <>
    <h1 className="topic">Todo Viewer</h1>

    <input
    type="text"
    placeholder="Search todos"
    value={search}
    onChange={(e) => dispatch(setSearch(e.target.value))} 
    className="search"/>

    <div className="container-card">
        {filteredTodos.map((todo) => (
            <ul className="todoCard">
                <li key={todo.id}>{todo.text}</li>
            </ul>
        ))}
    </div>
    </>
  );
};

export default TodoViewer