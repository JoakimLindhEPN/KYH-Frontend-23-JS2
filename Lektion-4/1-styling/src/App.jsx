import './App.css'
import { BlogList } from './components/BlogList/BlogList'
import { Title } from './components/Title/Title'

function App() {


  const subtitle = 'Come and see what`s going on in my life'
  return (
    <>
      <Title title="My awesome blog" subtitle={subtitle} />
      <div className="container">
        <div className="card">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, quas?</p>
          <button>click me</button>
        </div>
        <BlogList />
      </div>
    </>
  )
}
export default App