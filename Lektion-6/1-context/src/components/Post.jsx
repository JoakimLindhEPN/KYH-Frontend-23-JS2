export const Post = ({ post }) => {
  return (
    <div className="border p-2 rounded shadow">
      <h2 className="font-semibold text-xl">{post.title}</h2>
      <p className="truncate">{post.body}</p>
    </div>
  )
}