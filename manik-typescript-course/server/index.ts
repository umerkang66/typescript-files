import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Express + Typescript server');
});

const port = 3100;
app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
