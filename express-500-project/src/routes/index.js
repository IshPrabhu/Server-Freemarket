const express = require('express');
const router = express.Router();

// Route that intentionally triggers an error
router.get('/error', (req, res, next) => {
    const error = new Error('This is a forced error for testing purposes.');
    next(error);
});

// Route that responds with 500 status code
router.get('/force-500', (req, res) => {
    res.status(500).send('Internal Server Error');
});

module.exports = router;