import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import TodoForm from './components/TodoForm/TodoForm'

function App() {
 

  return (
    <>
    <Router>
      <nav>
        <Link to="/">Todo List </Link> <Link to="/view">Todo Viewer</Link>
      </nav>

      <Routes>
        <Route path='/' element={<TodoForm />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
