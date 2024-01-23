export const incrementCounter = 'INCREMENT_COUNTER'
export const decrementCounter = 'DECREMENT_COUNTER'


const actiontypes = () => {
  return {
    counter: {
      increment: 'INCREMENT_COUNTER',
      decrement: 'DECREMENT_COUNTER'
    },
    quantity: {
      increment: 'INCREMENT_QUANTITY',
      decrement: 'DECREMENT_QUANTITY'
    }
  }
}

export default actiontypes