import { useState } from "react"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


// Layouts
import RootLayout from './layouts/RootLayout'

// Pages
import HomePage from './pages/HomePage'
import PostsPage from './pages/PostsPage'
import CreatePostPage from './pages/CreatePostPage'

function App() {

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          // path: "/",
          index: true,
          element: <HomePage  />
        },
        {
          path: 'posts',
          element: <PostsPage posts={posts} />
        },
        {
          path: 'create',
          element: <CreatePostPage />
        },
      ]
    }
  ])




  return (
    <RouterProvider router={router} />
  )
}
export default App