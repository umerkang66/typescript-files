const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/events', async (req, res) => {
  console.log(`Received Event: "${req.body.type}" in MODERATION SERVICE`);

  const { type, data } = req.body;

  if (type === 'CommentCreated') {
    const status = data.content.includes('orange') ? 'rejected' : 'approved';

    // url is coming from k8s cluster ip service
    const url = 'http://event-bus-srv:4005/events';

    await axios.post(url, {
      type: 'CommentModerated',
      data: { ...data, status },
    });
  }

  res.send({});
});

app.listen(4003, () => {
  console.log('Moderation service is listening on port 4003');
});
