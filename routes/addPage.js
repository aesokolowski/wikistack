const express = require('express');
const router = express.Router();
const client = require('./db');
const { addPage } = require('../views');

router.get('/add', async (req, res) => {
  res.send(addPage());
});

modules.exports = router;;
