export const getPosts = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    return await res.json()
}

export const getPost = async(postId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    return await res.json()
}

export const getComments = async(postId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    return await res.json()
}

export const getProfile = async(authorId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
    return await res.json()
}
