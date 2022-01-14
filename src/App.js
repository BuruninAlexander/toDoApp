import React, { useState } from 'react'
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import './Styles/App.css'
import MyButton from './Ui/Button /MyButton';
import MyInput from './Ui/Input/MyInput';
import MySelect from './Ui/select/select';



function App() {
  const [posts, setPosts] = useState(
    [{ id: 1, title: "aa", body: 'dd' },
    { id: 4, title: "bb", body: 'cc' },
    { id: 2, title: "cc", body: 'bb' },
    { id: 3, title: "dd", body: 'aa' },
    ]
  )
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const [selectedSort, setSelectedSort] = useState('')
  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    console.log(sort)
  }
  const [search, setSearch] = useState("")
  return (
    <div className="App">
      <PostForm create={createPost} />
      <div>
        <hr style={{ margin: "15px" }}></hr>
        <MyInput
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={"search..."} >


        </MyInput>
        <MySelect
          value={selectedSort}
          onChange={sortPost}
          options={[
            { value: "title", name: "По заголовку" },
            { value: "body", name: "По описанию" }
          ]}
          defaultOption={"Сортировка"}>

        </MySelect>
        <hr style={{ margin: "15px" }}></hr>

      </div>
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