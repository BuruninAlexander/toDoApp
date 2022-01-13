import React, { useState } from 'react'
import PostList from './Components/PostList';
import './Styles/App.css'
import MyButton from './Ui/Button /MyButton';
import MyInput from './Ui/Input/MyInput';



function App() {
  const [posts, setPosts] = useState(
    [{ id: 1, title: "javascript", body: 'Description' },
    { id: 4, title: "javascript", body: 'Description' },
    { id: 2, title: "javascript", body: 'Description' },
    { id: 3, title: "javascript", body: 'Description' },
    ]
  )
  const [post, setPost] = useState({ body: " ", tytle: " " })
  // const [body, setBody] = useState('')
  console.log(post)

  const addNewPOst = (e) => {
    e.preventDefault()


    setPosts([...posts, { ...post, id: Date.now() }])
    setPost({ title: " ", body: " " })

  }
  return (
    <div className="App">
      <form>
        {/* управляемый компонент  */}
        <MyInput
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="описание загаловка">
        </MyInput>
        <MyInput
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="описание поста">

        </MyInput>
        <MyButton onClick={addNewPOst} disabled={false}>удалить</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1" />
    </div >
  );
}

export default App;