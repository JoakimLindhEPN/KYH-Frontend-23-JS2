import { useState } from "react"
import { Post } from "./components/Post/Post"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isDarkTheme, setisDarkTheme] = useState(false)
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Post 1',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempore quod modi asperiores odio in recusandae sed ipsa repellendus sunt blanditiis voluptatum et iure id inventore excepturi! Possimus, labore illo!'
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempore quod modi asperiores odio in recusandae sed ipsa repellendus sunt blanditiis voluptatum et iure id inventore excepturi! Possimus, labore illo!'
    },
    {
      id: 3,
      title: 'Post 3',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempore quod modi asperiores odio in recusandae sed ipsa repellendus sunt blanditiis voluptatum et iure id inventore excepturi! Possimus, labore illo!'
    },
    
  ])


  return (
    <div className="container">
      <button className="btn mb-2 mt-2" onClick={() => setIsLoggedIn(prev => !prev)}>Login</button>
      <button className="btn mb-2 mt-2" onClick={() => setisDarkTheme(prev => !prev)}>Change theme</button>
      {/* <Post post={posts[0]} />
      <Post post={posts[1]} />
      <Post post={posts[2]} /> */}

      {/* {
        posts.map(post => {
          if(!isLoggedIn) return <p>Not logged in</p>
          return <Post post={post} />
        })
      } */}
      {
        isLoggedIn ? 
        posts.length > 0 && posts.map((post, index) => (
          <Post key={post.id} post={post} isDarkTheme={isDarkTheme} />
        ))
        : <p>Not logged in</p>
      }

      {/* {
        posts.map(post => (
          <Post post={post} />
        ))
      } */}
    </div>
  )
}
export default App