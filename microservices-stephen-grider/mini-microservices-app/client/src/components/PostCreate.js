import { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmitHandler = async e => {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', { title });

    setTitle('');
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            id="title"
            className="form-control"
          />
        </div>
        <button
          style={{ marginTop: '10px' }}
          className="btn btn-primary"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
