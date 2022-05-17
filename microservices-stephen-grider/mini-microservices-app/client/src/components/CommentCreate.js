import { useState } from 'react';
import axios from 'axios';

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmitHandler = async e => {
    e.preventDefault();

    const url = `http://localhost:4001/posts/${postId}/comments`;
    await axios.post(url, { content });

    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="comment">New Comment</label>
          <input
            value={content}
            onChange={e => setContent(e.target.value)}
            className="form-control"
            type="text"
            name="comment"
            id="comment"
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

export default CommentCreate;
