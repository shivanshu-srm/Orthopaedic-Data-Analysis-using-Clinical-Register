const express = require('express');
const { searchByMatchingConsultantNames, getPatientDetailsbycn, getPatientDetailsbyareapin,getPatientDetailsbydaterange, searchByMatchingpincodes } = require('../controllers/filtercontroller');
const router = express.Router();


/*filter by consultant name starts*/

router.get('/getpatientdetailsbycn/:consultant_name', getPatientDetailsbycn);
router.get('/searchmatchingconsultantnames/:query', searchByMatchingConsultantNames);

/*filter by patient id ends*/

/*filter area pincode starts*/

router.get('/getpatientdetailsbyareapin/:pincode', getPatientDetailsbyareapin);
router.get('/searchmatchingpincodes/:query', searchByMatchingpincodes);

/*filter area pincode ends*/

/*filter by date range starts*/

router.get('/getpatientdetailsbydaterange/:startdate/:enddate', getPatientDetailsbydaterange);

/*filter by date range ends*/




module.exports = router;

