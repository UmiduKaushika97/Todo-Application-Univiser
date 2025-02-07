import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import TodoForm from './components/TodoForm/TodoForm'
import TodoViewer from './Pages/TodoViewer'

function App() {
 

  return (
    <>
    <Router>
      <div className='navDiv'>
      <nav>
        <Link to="/">Todo List </Link> <Link to="/view">Todo Viewer</Link>
      </nav>
      </div>
      <Routes>
        <Route path='/' element={<TodoForm />} />
        <Route path='/view' element={<TodoViewer />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
