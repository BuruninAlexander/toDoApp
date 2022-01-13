import React, { useState } from 'react'
import PostForm from './Components/PostForm';
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
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <div>
        <select>
          <option value="value1">Name</option>
          <option value="value2">Description</option>
          <option value="value3">somethingelse</option>

        </select>
      </div>
      <hr style={{ margin: "15px" }}></hr> // горизонтальный разделитель
      {posts.length !== 0
        ?
        <PostList remove={removePost} posts={posts} title="Список постов 1" />
        :
        <h1 style={{ textAlign: "center" }}> посты не найдены</h1>
      }
    </div >
  );
}

export default App;