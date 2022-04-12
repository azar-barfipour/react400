import React, {useState, useEffect} from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { getComments } from '../util'

const Comments = () => {
    const [comments, setComments] = useState(null)
    const [searchParams] = useSearchParams()

    
    const q = searchParams.get('q')
    
    console.log(q)
    useEffect(() => {
        getComments(q).then(setComments)
    }, [q])

    if(!comments){
        return <h1>Loading Comments...</h1>
    }

    return (
        <ul>
            {comments && comments.map(comment => (
                <li key={comment.id}>
                    <h3>{comment.name}</h3>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                    <hr />
                    <Link to="/profile" state={{ authorId: comment.id }}>
                        Author
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Comments