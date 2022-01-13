import React from 'react'
import PostItem from './PostItem'
const PostList = ({ posts, title, remove }) => {
    // console.log(posts)
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>

            {posts.map((posts, index) =>
                <PostItem remove={remove} post={posts} number={index + 1} key={posts.id} />)
            }
        </div >
    )
}
export default PostList;