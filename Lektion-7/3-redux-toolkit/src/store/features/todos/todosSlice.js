import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import todosService from './todosService'

const initialState = {
  todos: [],
  error: null,
  loading: false
}

export const getAllTodos = createAsyncThunk('todos/getAll', async (_, thunkAPI) => {
  try {
    return await todosService.getAllTodos()
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})

export const getTodoById = createAsyncThunk('todos/getById', async (id, thunkAPI) => {
  try {
    return await todosService.getTodoById(id)
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder
      .addCase(getAllTodos.pending, (state) => {
          state.loading = true
          state.error = null
      })
      .addCase(getAllTodos.fulfilled, (state, action) => {
        console.log(action)
        state.loading = false
        state.error = null
        state.todos = action.payload
      })
      .addCase(getAllTodos.rejected, (state, action) => {
        console.log(action)
        state.loading = false
        state.error = action.payload
      })


      .addCase(getTodoById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getTodoById.fulfilled, (state, action) => {
        console.log(action)
        state.loading = false
        state.error = null
        state.todos = action.payload
      })
      .addCase(getTodoById.rejected, (state, action) => {
        console.log(action)
        state.loading = false
        state.error = action.payload
      })
  }
})


export default todosSlice.reducer