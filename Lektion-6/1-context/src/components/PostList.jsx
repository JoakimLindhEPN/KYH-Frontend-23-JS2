import { Post } from "./Post"

export const PostList = ({ posts }) => {
  return (
    <div className="flex flex-col gap-3">
      {
        posts && posts.map(post => (
          <Post key={post.id} post={post} />
        ))
      }
    </div>
  )
}