import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'

import counterReducer from './reducers/counterReducer'
import quantityReducer from './reducers/quantityReducer'
import todosReducer from './reducers/todosReducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  quantity: quantityReducer,
  todos: todosReducer
})

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)