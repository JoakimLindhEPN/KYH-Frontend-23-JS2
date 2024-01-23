import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/reducers/quantityReducer'

export const Quantity = () => {

  const quantity = useSelector(state => state.quantity)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Quantity</h2>
      <p>Quantity is = {quantity}</p>
      <button onClick={() => dispatch(increment(1))}>1</button>
      <button onClick={() => dispatch(increment(10))}>10</button>
      <button onClick={() => dispatch(decrement(1))}>-1</button>
      <button onClick={() => dispatch(decrement(10))}>-10</button>
    </div>
  )
}