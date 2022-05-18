const CommentList = ({ comments }) => {
  const renderedComments = comments.map(comment => {
    let content;
    if (comment.status === 'pending')
      content = 'This comment is being approved';
    else if (comment.status === 'rejected')
      content = 'This comment is rejected';
    else if (comment.status === 'approved') content = comment.content;

    let style = {};
    if (comment.status !== 'approved') style = { fontStyle: 'italic' };

    return (
      <li style={style} key={comment.id}>
        {content}
      </li>
    );
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
