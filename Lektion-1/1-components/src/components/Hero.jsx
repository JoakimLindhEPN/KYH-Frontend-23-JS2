export const Hero = () => {

  function handleClick(e) {
    console.log(e)
    console.log('klickade')
  }

  return (
    <div className="h-screen bg-secondary d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1>Köp våra tjänster nu!</h1>
        <button onClick={(e) => handleClick(e)} className="btn btn-primary">Boka tid för rådgivning</button>
      </div>
    </div>
  )
}