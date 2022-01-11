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
    { id: 1, title: "javascript", body: 'Description' },
    { id: 2, title: "javascript", body: 'Description' },
    { id: 3, title: "javascript", body: 'Description' },
    ]
  )
  console.log(posts, setPost)
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="название поста"></input>
        <MyInput propstype="text" placeholder="описание поста"></MyInput>
        <MyButton disabled={true}>удалить</MyButton>
        <MyButton disabled={true}>вверх</MyButton>
        <MyButton disabled={true}>вниз</MyButton>
        <MyButton disabled={true}>пополам</MyButton>


        {/* onChange={event => setValue(event.target.value)} /> /* тут мы достаем спомощью дом дерева значение инпута которое
        будем вводить, так как стоит onChange ( то реагировать он будет на каждый введенный символ) */}
      </form>
      <PostList posts={posts} title="Список постов 1" />
      {/* <Counter />
      <MyInput /> */}
    </div>
  );
}

export default App;