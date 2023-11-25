const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'My Node Project' });
});

module.exports = router;

