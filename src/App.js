import React, { useState } from 'react'
import Counter from './Components/counter'
import PostItem from './Components/PostItem';
import PostList from './Components/PostList';
import './Styles/App.css'
import MyButton from './Ui/Button /MyButton';
import MyInput from './Ui/Input/MyInput';
function App() {
  const [value, setValue] = useState('Текст в инпуте')

  const [posts, setPost] = useState(
    [{ id: 1, title: "javascript", body: 'Description' },
    { id: 4, title: "javascript", body: 'Description' },
    { id: 2, title: "javascript", body: 'Description' },
    { id: 3, title: "javascript", body: 'Description' },
    ]
  )
  const [title, setTitle] = useState('www')
  console.log(title)
  const addNewPOst = (e) => {
    e.preventDefault()
    console.log(title)
  }
  // console.log(posts, setPost)
  return (
    <div className="App">
      <form>
        {/* управляемый компонент  */}
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
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