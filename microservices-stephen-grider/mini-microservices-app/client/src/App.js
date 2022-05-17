import { useState } from 'react';
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';

const App = () => {
  const [posts, setPosts] = useState({});

  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate posts={posts} setPosts={setPosts} />
      <hr />
      <h1>Posts</h1>
      <PostList posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default App;
