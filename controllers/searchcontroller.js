const Form = require('../models/formmodel');


/*search by patient id starts*/

module.exports.getPatientDetails=async(req, res)=> {
    try {
      const { patientID } = req.params;
      console.log(patientID);
      const patient = await Form.findOne({ "formData.patientID": patientID });

      if (!patient) {
        res.status(404).json({ error: 'Patient not found' });
        return;
      }
      res.json(patient);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }


  module.exports.searchMatchingPatientIds=async(req, res) =>{
    try {
      const { query } = req.params;
const matchingPatientIds = await Form.find({ "formData.patientID": { $regex: query, $options: 'i' } })
  .distinct('formData.patientID');

      res.json(matchingPatientIds);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  /*search by patient id ends*/

  /*search by patient name starts*/

  module.exports.getPatientDetailsByName=async(req, res)=> {
    try {
      const { name } = req.params;
      console.log(name);
      const detailsbypatientname = await Form.findOne({ "formData.name": name });

      if (!detailsbypatientname) { 
        res.status(404).json({ error: 'Patient not found' });
        return;
      }
      res.json(detailsbypatientname);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }


  module.exports.searchMatchingPatientNames=async(req, res) =>{
    try {
      const { query } = req.params;
const matchingPatientNames = await Form.find({ "formData.name": { $regex: query, $options: 'i' } })
  .distinct('formData.name');

      res.json(matchingPatientNames);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  /*search by patient name ends*/

