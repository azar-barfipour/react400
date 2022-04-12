import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPost } from '../util'

const PostPage = () => {
    const [post, setPost] = useState(null)
    const { postId } = useParams()

    useEffect(() => {
        getPost(postId).then(setPost)
    }, [postId])

    if(!post){
        return <h1>Loading Post...</h1>
    }

  return (
    <>
        <h1>Post Title: {post.title}</h1>
        <p>{post.body}</p>
        <hr />
        <Link to={`/comments?q=${postId}`}>Read more</Link>
    </>
  )
}

export default PostPage