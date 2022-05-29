const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const events = [];

// Receive event from one service, and send it to all of the services
app.post('/events', (req, res) => {
  const event = req.body;
  events.push(event);

  /*axios
    .post('http://localhost:4000/events', event)
    .catch(err => console.log(err.message));
  axios
    .post('http://localhost:4001/events', event)
    .catch(err => console.log(err.message));
  axios
    .post('http://localhost:4002/events', event)
    .catch(err => console.log(err.message));
  axios
    .post('http://localhost:4003/events', event)
    .catch(err => console.log(err.message));*/

  axios
    .post('http://posts:4000/events', event)
    .catch(err => console.log(err.message));
  axios
    .post('http://comments:4001/events', event)
    .catch(err => console.log(err.message));
  axios
    .post('http://query:4002/events', event)
    .catch(err => console.log(err.message));
  axios
    .post('http://moderation:4003/events', event)
    .catch(err => console.log(err.message));

  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Event Bus is listening on port 4005');
});
