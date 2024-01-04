import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    // setCounter(counter + 1)
    // setCounter((previuosCounterValue) => previuosCounterValue + 1)

    // Om man vill sätta ett fast värde
    // setCounter(300)

    // Om man vill räkna ut någonting från det man redan har
    setCounter(prev => prev + 1)
  }

  const [firstName, setFirstName] = useState('Joakim')
  const [lastName, setLastName] = useState('Wahlström')


  // const [fullName, setFullName] = useState(firstName + ' ' + lastName)
  const fullName = firstName + ' ' + lastName

  return (
    <div>
      <h1>{ counter }</h1>
      <button onClick={handleClick}>Increment</button>
      <p>{firstName} {lastName}</p>
      <p>{fullName}</p>

      <button onClick={() => {
        setLastName('Lindh')
      }}>Change Name</button>
    </div>
  )
}
export default App