import React, { useEffect, useState,  } from 'react'
import axios from 'axios' 

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id:"1",
            image: "https://ik.imagekit.io/umer0/_image_xJlgHoOJG.jpg",
            caption: "This is my first post!"
        }
    ])
    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            setPosts(res.data.posts);
        })
    }, [])
        

  return (
    <section className='feed-section'>
        {/* <h1>Feed</h1>  */}
        { posts.length > 0 ? (
            posts.map((post) => (
            <div key={post._id} className='post'>
                <img src={post.image} alt="Post" />
                <p>{post.caption}</p>
            </div>
        ))
    ) : (
        <p>No posts available.</p>
    )}
    </section>
  )
}

export default Feed