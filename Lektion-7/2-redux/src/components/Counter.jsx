import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/reducers/counterReducer'

export const Counter = () => {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()


  return (
    <div>
      <h2>Counter</h2>
      <p>Counter is = {counter}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}