import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos/'

const getAllTodos = async () => {
  const res = await axios.get(BASE_URL)
  return res.data

  // const res = await fetch(BASE_URL)
  // return res.json()
}

const getTodoById = async (id) => {
  const res = await axios.get(BASE_URL + id)
  return res.data
}

const createTodo = async (todoData) => {
  const res = await axios.post(BASE_URL, todoData)
  return res.data
}

const todosService = {
  getAllTodos,
  getTodoById,
  createTodo
}

export default todosService