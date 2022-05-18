const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

// Receive events from event bus, and process them if relevant
app.post('/events', (req, res) => {
  console.log(`Received Event: "${req.body.type}" in QUERY SERVICE`);
  const { type, data } = req.body;

  if (type === 'PostCreated') {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data;
    posts[postId].comments.push({ id, content, status });
  }

  if (type === 'CommentUpdated') {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    const comment = post.comments.find(comment => comment.id === id);

    comment.status = status;
    comment.content = content;
  }

  // console.log(JSON.stringify(posts, null, 2));
  res.send({});
});

app.listen(4002, () => {
  console.log('Query Service is listening on port 4002');
});
