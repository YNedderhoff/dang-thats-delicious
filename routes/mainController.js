const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('hello', {'appName': 'Dang, that\'s delicious!'});
});


module.exports = router;