import { useState } from "react"

function App() {
  const [showName, setShowName] = useState(true)
  const [name, setName] = useState(' ')

  const toggleShowName = () => {
    setShowName(prev => !prev)
  }

  // if(showName) {
  //   return <p>JOAKIM</p>
  // }
  return (
    <div>
      <h1>Conditional Rendering</h1>

      <button onClick={toggleShowName}>{showName === true ? 'Hide Name' : 'Show Name'}</button>

      {/* { showName ? <p>Joakim Lindh</p> : <p>Inget namn</p> } */}

      { showName && <p>Joakim Lindh</p> }
      

      { name && <p>{ name }</p> }
    </div>
  )
}
export default App