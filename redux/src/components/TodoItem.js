import React from 'react'
import { useDispatch } from 'react-redux'
import { tamamlandiAcKapa, isSil } from '../redux/todoSlice'

const TodoItem = ({ title, id, completed }) => {
  const vekilFonksiyon = useDispatch()
  function tamamlandiIslem() {
    vekilFonksiyon(tamamlandiAcKapa({ id, completed: !completed }))
  }

  function silmeIslemi() {
	vekilFonksiyon(isSil({id:id}))
  }

  return (
    <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <label>
            <input
              type="checkbox"
              className="me-3 form-check-input"
              checked={completed}
              onChange={tamamlandiIslem}
            ></input>
            {title}
          </label>
        </span>
        <button className="btn btn-danger" onClick={silmeIslemi}>Delete</button>
      </div>
    </li>
  )
}

export default TodoItem
