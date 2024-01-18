import { useFormik } from 'formik'
import { useNavigate, Navigate } from 'react-router-dom'
import { usePostsContext } from '../contexts/PostsContext'

function CreatePostPage() {

  const { addPost } = usePostsContext()

  const navigate = useNavigate()

  const form = useFormik({
    initialValues: {
      title: '',
      body: ''
    },
    onSubmit: (values) => {
      console.log(values)
      addPost(values)
      form.resetForm()
      navigate("/posts")
    }
  })


  return (
    <div>
      <h1 className="text-center text-3xl font-semibold my-4">Create a new Post</h1>
      <form onSubmit={form.handleSubmit} className="">
        <div className="mb-4">
          <label htmlFor="title" className="block">Title</label>
          <input id='title' value={form.values.title} onChange={form.handleChange} type="text" className="border border-gray-400 rounded-md w-full px-2 py-1" />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block">Content</label>
          <textarea id="body" value={form.values.body} onChange={form.handleChange} className="border border-gray-400 rounded-md w-full px-2 py-1 resize-none"></textarea>
        </div>
        <button 
          type="submit" 
          className="bg-emerald-600 px-10 py-2 rounded-md text-white hover:bg-emerald-700 transition-colors"
        >
          Create
        </button>
      </form>
    </div>
  )
}
export default CreatePostPage