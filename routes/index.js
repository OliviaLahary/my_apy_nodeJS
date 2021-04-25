const express = require('express');
const router = express.Router();


const roles = require('./roles.js')
const blogs = require('./blogs.js')

router.use('/roles', roles);
router.use('/blogs', blogs)

module.exports = router;
