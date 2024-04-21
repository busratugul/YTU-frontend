import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: '1', title: 'Elma al', completed: false },
    { id: '2', title: 'Muz al', completed: false },
    { id: '3', title: 'Süt al', completed: true },
    { id: '4', title: 'Yumurta al', completed: false },
    { id: '5', title: 'Ekmek al', completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuidv4(),
        title: action.payload.title,
        completed: action.payload.completed ? action.payload.completed : false,
      }
      state.push(todo)
    },
    tamamlandiAcKapa: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id)
      state[index].completed = action.payload.completed
    },
    isSil: (state, action) => {
      const yeniState = state.filter(
        (eleman) => eleman.id !== action.payload.id
      )
      return yeniState
    },
    sirala: (state, action) => {
      const yeniArr = state.sort((onceki, sonraki) => onceki.title.localeCompare(sonraki.title, 'tr'))
      return yeniArr
    },
  },
})

export const { addTodo, tamamlandiAcKapa, isSil, sirala } = todoSlice.actions

export default todoSlice.reducer
