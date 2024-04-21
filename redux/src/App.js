import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'
import TotalCompleteItems from './components/TotalCompleteItems'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './redux/todoSlice'
import { deleteLastToDo } from './redux/undoSlice'

const App = () => {
  const vekilFonksiyon = useDispatch()

  const undosArr = useSelector((state) => state.undos)

  function geriAl() {
    const sonSilinenIs = [...undosArr].pop()
    vekilFonksiyon(
      addTodo({ title: sonSilinenIs.title, completed: sonSilinenIs.completed })
    )
    vekilFonksiyon(deleteLastToDo())
  }

  return (
    <div className="container bg-white p-4 mt-5">
      <h1
        className="d-flex justify-content-between align-items-center"
        style={{ cursor: 'pointer' }}
      >
        Yapılacak İşler
        {undosArr.length > 0 && (
          <div>
            <RiArrowGoBackFill className="fs-5" onClick={geriAl} />
            <span className='fs-6'>{undosArr.length}</span>
          </div>
        )}
      </h1>

      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  )
}

export default App
