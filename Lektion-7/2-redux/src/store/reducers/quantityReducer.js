import actiontypes from "../actiontypes"

export const increment = (amount) => {
  return {
    type: actiontypes().quantity.increment,
    payload: amount
  }
}

export const decrement = (amount) => {
  return {
    type: actiontypes().quantity.decrement,
    payload: amount
  }
}
  
  
const initState = 0
  
const quantityReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().quantity.increment:
      return state + action.payload
    case actiontypes().quantity.decrement:
      return state - action.payload
    default:
      return state
  }
}

export default quantityReducer