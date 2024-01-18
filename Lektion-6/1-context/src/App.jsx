import { useState } from "react"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


// Layouts
import RootLayout from './layouts/RootLayout'

// Pages
import HomePage from './pages/HomePage'
import PostsPage from './pages/PostsPage'
import CreatePostPage from './pages/CreatePostPage'

function App() {

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
          element: <PostsPage />
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