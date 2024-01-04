import { useState } from 'react'
import './Post.css'

export const Post = ({ post, isDarkTheme }) => {

  // const [isDarkTheme, setIsDarkTheme] = useState(false)

  // const toggleTheme = () => {
  //   setIsDarkTheme(state => !state)
  // }

  return (
    <div className="Post mb-2">
       <div className={`card ${isDarkTheme ? 'dark' : ''}`}>
        <p className="title">{post.title}</p>
        <p>{post.body}</p>
        {/* <button onClick={toggleTheme} className="btn mt-2">Change to dark</button> */}
       </div>
    </div>
  )
}