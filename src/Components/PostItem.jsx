import React from 'react'
import MyButton from '../Ui/Button /MyButton';
const PostItem = (props) => {
    // console.log(props)
    return (
        <div className="App">
            <div className="posts">
                <div className="postsContens">
                    <strong>{props.number}.{props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                    <div className="postsBTN">
                        <MyButton style={{
                            padding: "5px 15px",
                            color: "teal",
                            fontsize: "14px",
                            background: "transparent",
                            border: " 1px solid teal",
                            cursor: "pointer",
                        }}
                            onClick={() => props.remove(props.post)} >Удалить</MyButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostItem;