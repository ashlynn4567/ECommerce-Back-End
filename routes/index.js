// imports
const router = require('express').Router();
const apiRoutes = require('./api');

// redirect routes
router.use('/api', apiRoutes);

// if incorrect file path is given, send error message
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// exports
module.exports = router;