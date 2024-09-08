
const express = require('express');
const {gctpresentation,gctimaging,gctpostopcomp} = require('../controllers/deptcontroller');
const router = express.Router();


router.get('/gctpresentation',gctpresentation );
router.get('/gctimaging',gctimaging)
router.get('/gctpostopcomp',gctpostopcomp)



module.exports = router; 