import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/posts")
            .then((res) => {
                setPosts(res.data.posts);
            })
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/posts/${id}`)
            // UI se bhi turant hata do, page reload ki zarurat nahi
            setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id))
        } catch (err) {
            console.error("Delete failed:", err)
        }
    }

    return (
        <section className='feed-section'>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className='post'>
                        <img src={post.image} alt="Post" />
                        <p>{post.caption}</p>
                        <button
                            className='delete-btn'
                            onClick={() => handleDelete(post._id)}
                        >
                            Delete
                        </button>
                    </div>
                ))
            ) : (
                <p>No posts available.</p>
            )}
        </section>
    )
}

export default Feed