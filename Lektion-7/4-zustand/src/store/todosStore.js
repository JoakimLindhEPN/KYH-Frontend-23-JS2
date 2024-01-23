import { create } from 'zustand'
import axios from 'axios'

export const useTodosStore = create((set) => ({
  todos: [],
  error: null,
  loading: false,

  
  getAllTodos: async () => {
    set(() => ({ loading: true }))
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      set((state) => ({ todos: res.data, loading: false }))
    } catch (err) {
      set((state) => ({ loading: false, error: err.message }))
    }
  }
}))