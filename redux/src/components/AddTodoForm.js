import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/todoSlice'
import { sirala } from '../redux/todoSlice'

const AddTodoForm = () => {
  const [value, setValue] = useState('')

  const vekilFonksiyon = useDispatch()
  const todoArr = useSelector(state => state.tds)

  const onSubmit = (event) => {
    event.preventDefault() //form gönderimi tarayıcıyı yeniden başlatmasın

    if (value) {
      vekilFonksiyon( addTodo({ title: value })) //payload
      setValue("")
    }
  }

  function siraliListe() {
    vekilFonksiyon(sirala())
  }


  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
      <button onClick={siraliListe}>Sırala</button>
    </form>
  )
}

export default AddTodoForm
