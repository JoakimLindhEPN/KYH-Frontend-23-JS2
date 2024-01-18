import { createContext, useContext, useState } from "react"

export const PostsContext = createContext()


function PostsContextProvider({ children }) {
  const [posts, setPosts] = useState([
    {
      id: 1, 
      title: 'Post 1',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quasi.'
    },
    {
      id: 2, 
      title: 'Post 2',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quasi.'
    }
  ])

  const addPost = (formData) => {
    const post = {
      id: crypto.randomUUID(),
      title: formData.title,
      body: formData.body
    }
    setPosts(state => [...state, post])
  }

  const value = {
    posts,
    addPost
  }
  return (
    <PostsContext.Provider value={value}>
      { children }
    </PostsContext.Provider>
  )
}
export default PostsContextProvider






export const usePostsContext = () => {
  const context = useContext(PostsContext)

  if(!context) throw new Error('usePostsContext must be called within a PostContextProvider')

  return context
}