let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

////////////////////////////////////////////////////////////////////////////////

let CategoryModel = require('./Category');

////////////////////////////////////////////////////////////////////////////////
// CATEGORIES
////////////////////////////////////////////////////////////////////////////////

router.route('/')
// get recipes
.get(function(req, res){
  CategoryModel.Category.find({}).exec(function(err, doc){
		if(err) res.status(500).json({res : err});
    else res.status(200).json({res : doc});
  });
});

////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
// 0 = not ok
// 1 = ok
// 2 = taken

function isLoggedIn(req){
  return req.session.user_id;
}

module.exports = router;
