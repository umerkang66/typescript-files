const { randomBytes } = require('crypto');
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const posts = {};

// This is not used by react application
app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts/create', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  posts[id] = { id, title };

  // Emit an event
  // url is coming from k8s cluster ip service
  const url = 'http://event-bus-srv:4005/events';
  await axios.post(url, { type: 'PostCreated', data: { id, title } });

  res.status(201).send(posts[id]);
});

// Receive events from event bus, and process them if relevant
app.post('/events', (req, res) => {
  console.log(`Received Event: "${req.body.type}" in POST SERVICE`);

  res.send({});
});

app.listen(4000, () => {
  console.log('Post service is listening on port 4000');
});
