import { useContext } from "react"
import { PostList } from "../components/PostList"
import { PostsContext, usePostsContext } from "../contexts/PostsContext"

function PostsPage() {

  // const { test } = useContext(PostsContext)
  const { posts } = usePostsContext()


  return (
    <div className="pt-5">
      {/* <PostList.Skeleton /> */}
      <PostList posts={posts} />
    </div>
  )
}
export default PostsPage