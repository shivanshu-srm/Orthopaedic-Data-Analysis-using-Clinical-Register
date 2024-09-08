
const express = require('express');
const router = express.Router();
const {getPatientDetails,searchMatchingPatientIds, getPatientDetailsByName, searchMatchingPatientNames} = require('../controllers/searchcontroller'); 


/*search by patient id starts*/

router.get('/getpatientdetails/:patientID', getPatientDetails);
router.get('/searchmatchingpatientids/:query', searchMatchingPatientIds);

/*search by patient id ends*/

/*search by patient name starts*/

router.get('/getpatientdetailsbyname/:name', getPatientDetailsByName);
router.get('/searchmatchingpatientnames/:query', searchMatchingPatientNames);

/*search by patient name ends*/


module.exports = router;