const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const commentsByPostId = {};

// This is not used by react application
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;
  const { id: postId } = req.params;

  const comments = commentsByPostId[postId] || [];
  comments.push({ id: commentId, content, status: 'pending' });
  commentsByPostId[postId] = comments;

  // Emit an event
  const url = 'http://localhost:4005/events';
  await axios.post(url, {
    type: 'CommentCreated',
    data: { id: commentId, content, postId, status: 'pending' },
  });

  res.status(201).send(comments);
});

// Receive events from event bus, and process them if relevant
app.post('/events', async (req, res) => {
  console.log(`Received Event: "${req.body.type}" in COMMENTS SERVICE`);
  const { type, data } = req.body;

  if (type === 'CommentModerated') {
    const { postId, id, status, content } = data;
    const comments = commentsByPostId[postId];
    const comment = comments.find(com => com.id === id);

    comment.status = status;

    await axios.post('http://localhost:4005/events', {
      type: 'CommentUpdated',
      data: { id, postId, status, content },
    });
  }

  res.send({});
});

app.listen(4001, () => {
  console.log('Comments service is listening on 4001');
});
