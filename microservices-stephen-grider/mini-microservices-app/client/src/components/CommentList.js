import { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:4001/posts/${postId}/comments`;

      const res = await axios.get(url);
      setComments(res.data);
    };

    fetchData();
  }, [postId]);

  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return (
    <div>
      <ul>{renderedComments}</ul>
    </div>
  );
};

export default CommentList;
