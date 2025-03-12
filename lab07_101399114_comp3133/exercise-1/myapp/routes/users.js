var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', urlencodedParser, function(req, res) {
  console.log('Received POST request');

  // Log the entire request body (for debugging)
  console.log('Request Body:', req.body);

  // Extract parameters (Assuming firstName and lastName are in the body)
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);

  res.send('POST received!'); // Send the required response
});

module.exports = router;
