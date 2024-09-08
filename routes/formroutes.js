
const express = require('express');
const router = express.Router();
const {submitForm, deletePatientRecord, getAllForms} = require('../controllers/formcontroller');


router.post('/submitform', submitForm);
router.get('/getpatientdetails',getAllForms );
router.delete('/deletepatientrecord/:patientID', deletePatientRecord);


module.exports = router;
