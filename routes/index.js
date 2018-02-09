const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
    res.render('hello', {
        name: "Yanick",
        title: "TestTitle"
    });
});

router.get('/test/:name/', (req, res) => {
    const response = {
        param: req.query.first,
        param2: req.params.name
    };
    console.log("TestLog");
    res.json(response);
});

module.exports = router;