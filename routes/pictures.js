var express = require('express');
var router = express.Router();
const fs = require('fs');
var path = require('path');

// Or
/* GET pictures listing. */
router.get('/:pictureName', function(req, res, next) {
  const pictures = fs.readdirSync(path.join(__dirname, '../pictures/'));
  res.render('pictureDetails', { pictures: pictures});
});

router.post('/', function(req, res, next) {
  const file = req.files.file;
  fs.writeFileSync(path.join(__dirname, '../pictures/', file.name), file.data);
  res.end();
});

module.exports = router;