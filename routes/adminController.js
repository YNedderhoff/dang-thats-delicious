const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('pong');
});

router.get('/info', (req, res) => {
  const response = { 
     appName: "Dang, that\'s delicious!",
     author: "Yanick Nedderhoff", 
     githubHandle: "ynedderhoff" 
    };
  res.json(response);
});

router.get('/echo/:anyInput', (req, res) => {
  const queryParams = req.query;
  const pathParam = req.params.anyInput;
  const echo = {queryParams: queryParams, pathParam: pathParam};
  res.json(echo);
})


module.exports = router;