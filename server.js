const express = require('express');
const users = require('./routes/user');
const votes = require('./routes/votes');

const app = express();
const port = 8080;

app.use('/users', users);
app.use('/votes', votes);

app.get('/', (req, res) => {
  res.send('Hello World!  Running nodemon');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
