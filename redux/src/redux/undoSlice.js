import { createSlice } from '@reduxjs/toolkit'

export const undoSlice = createSlice({
  name: 'undos',
  initialState: [],
  reducers: {
    saveTodo: (state, action) => {
      const todo = {
        title: action.payload.title,
        completed: action.payload.completed,
      }
      state.push(todo)
    },
    deleteLastToDo: (state,action) => {
     state.pop()
    }
  },
})

export const { saveTodo, deleteLastToDo } = undoSlice.actions

export default undoSlice.reducer
