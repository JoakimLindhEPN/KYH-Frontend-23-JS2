export const Contact = ({ name, email, id }) => {

  const handleClick = () => {
    // console.log('klickade på', name)
    console.log('tar bort kontakt med id:', id)
  }

  return (
    <div className="contact" onClick={handleClick}>
      <p className="name">{ name }</p>
      <p className="email">{ email }</p>
    </div>
  )
}