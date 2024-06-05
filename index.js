import express from 'express';

const app = express();

app.get('/saludo', (req, res) => {
  res.send('Hello World!');
});

app.get('/kkk', (req, res) => {
  res.send('Yo modifique este archivo :) ');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});