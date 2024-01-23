import actiontypes from "../actiontypes"

export const getTodos = () => {
  return async (dispatch) => {
    dispatch({ type: actiontypes().todos.load })
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    if(!res.ok) {
      dispatch({ type: actiontypes().todos.loadFailure })
    }
    const data = await res.json()
    dispatch({
      type: actiontypes().todos.loadSuccess,
      payload: data
    })
  }
}

const initState = {
  todos: [],
  loading: false,
  error: null
}

const todosReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().todos.load:
      return {
        ...state,
        loading: true,
        error: null
      }

    case actiontypes().todos.loadFailure:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong!'
      }

    case actiontypes().todos.loadSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        todos: action.payload
      }

    default:
      return state
  }
}

export default todosReducer