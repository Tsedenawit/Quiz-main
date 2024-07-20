import { createSlice, configureStore } from '@reduxjs/toolkit'
import { Data } from '../Data'
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    index:0,
    question:Data[0],
    score:0
  },
  reducers: {
    setQuestion:(state,action)=>{
        state.question=action.payload
    },
    setScore:(state,action)=>{
      state.question=action.payload
  }
  }
})

export const { setQuestion } = counterSlice.actions

export const store = configureStore({
  reducer: counterSlice.reducer
})