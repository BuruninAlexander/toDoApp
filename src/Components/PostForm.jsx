import React, { useState } from "react"
import MyButton from '/Users/buruninaleksandr/Desktop/webApp Type+React/my-app/src/Ui/Button /MyButton';
import MyInput from '/Users/buruninaleksandr/Desktop/webApp Type+React/my-app/src/Ui/Input/MyInput';

const PostForm = ({ create }) => {         // задать вопрос если без скобок то он имя функции превращает в ключ,а если в фигурных скобках то сохраняет целостность


    const [post, setPost] = useState({ body: "", title: "" })

    const addNewPOst = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        setPost({ title: "", body: "" })
        create(newPost)
    }

    return (
        <div>
            <form>
                {/* управляемый компонент  */}
                <MyInput
                    value={post.title}
                    onChange={e => setPost({ ...post, title: e.target.value })} // как ... post разворачиваетя оператором расширения если это объект
                    type="text"
                    placeholder="описание заголовка">
                </MyInput>
                <MyInput
                    value={post.body}
                    onChange={e => setPost({ ...post, body: e.target.value })}
                    type="text"
                    placeholder="описание поста">
                </MyInput>
                <MyButton onClick={addNewPOst} disabled={false}>Добавить пост</MyButton>
            </form>
        </div>
    )
}

export default PostForm