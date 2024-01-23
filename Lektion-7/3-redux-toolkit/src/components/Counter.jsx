import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/features/counterSlice'

export const Counter = () => {

  const {value :counter} = useSelector(state => state.counter)
  const dispatch = useDispatch()


  return (
    <div>
      <h2>Counter</h2>
      <p>Counter is = {counter}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement(7))}>-</button>
    </div>
  )
}