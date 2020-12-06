const express = require('express');

const router = express.Router();

router.post('/:id', (req, res) => {
  res.send(req.params);
});

router.get('/', (req, res) => {
  res.send('This will return all vote results');
});

router.get('/top10', (req, res) => {
  res.send('This will return the top 10 votes');
});

router.get('/:userId', (req, res) => {
  res.send(`this will return ${req.params.userId}'s votes`);
});

module.exports = router;

