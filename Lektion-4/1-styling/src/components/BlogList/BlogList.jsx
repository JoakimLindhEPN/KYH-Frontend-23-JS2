import { useState } from 'react'
import styles from './BlogList.module.css'

export const BlogList = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'My first Blog Post', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed recusandae nisi eligendi at beatae.'},
    { id: 2, title: 'How to use React', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed recusandae nisi eligendi at beatae.'},
    { id: 3, title: 'CSS is awesome', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed recusandae nisi eligendi at beatae.'},
  ])

  return (
    <div>
      {
        blogs.map(blog => (
          <div key={ blog.id } className={styles['card-test']}>
            <h2 className='title'>{ blog.title }</h2>
            <p>{ blog.body }</p>
            <button>Remove</button>
          </div>
        ))
      }
    </div>
  )
}