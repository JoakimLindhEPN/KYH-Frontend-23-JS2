import { useCounterStore } from "../store/counterStore"


export const Counter = () => {

  const { value, increment, decrement } = useCounterStore()

  return (
    <div>
      <h2>Counter</h2>
      <p>Counter is = {value}</p>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  )
}