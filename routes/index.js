const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');

// Do work here
router.get('/', (req, res) => {
    res.render('hello', {
        name: "Yanick",
        title: "TestTitle"
    });
});

router.get('/name/:name/', testController.myFunction);

module.exports = router;
