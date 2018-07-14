var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:term', function(req, res, next) {
     var term = req.params.term

     res.send('respond with a resource +'+term);
});

module.exports = router;
