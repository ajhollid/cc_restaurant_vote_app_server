const express = require('express');

const router = express.Router();

router.get('/:id', (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

module.exports = router;

