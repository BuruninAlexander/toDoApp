import React from 'react'
const PostItem = (props) => {
    console.log(props)
    return (
        <div className="App">
            <div className="posts">
                <div className="postsContens">
                    <strong>{props.number}.{props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                    <div className="postsBTN">
                        <button>удалить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostItem;