import actiontypes from "../actiontypes"

export const increment = () => {
  return {
    type: actiontypes().counter.increment
  }
}

export const decrement = () => {
  return {
    type: actiontypes().counter.decrement
  }
}

// {
//   type: 'sadasdasd',
//   payload: 3
// }
  
  
const initState = 0
  
const counterReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().counter.increment:
      return state + 1
    case actiontypes().counter.decrement:
      return state - 1
    default:
      return state
  }
}

export default counterReducer