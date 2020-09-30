const express = require('express');
const router = express.Router();
const bodyParser  = require('body-parser');

const detailsController = require('../controller/Details');

 
router.use(bodyParser.json());
router.post('/addPost',detailsController.addPost);
router.get('/getPosts',detailsController.getPosts);
router.post('/editPost',detailsController.updatePost);

module.exports = router;