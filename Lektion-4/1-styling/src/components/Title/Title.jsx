import './Title.css'

export const Title = ({ title, subtitle }) => {
  return (
    <header className="title-component">
      <h1 className="title">{ title }</h1>
      <p className="subtitle">{ subtitle }</p>
    </header>
)
}