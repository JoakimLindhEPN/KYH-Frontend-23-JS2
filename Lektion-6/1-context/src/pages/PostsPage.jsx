import { PostList } from "../components/PostList"

function PostsPage({posts}) {
  return (
    <div className="pt-5">
      <PostList posts={posts} />
    </div>
  )
}
export default PostsPage