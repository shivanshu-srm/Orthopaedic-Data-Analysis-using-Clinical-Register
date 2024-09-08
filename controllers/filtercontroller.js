const Form = require('../models/formmodel');


/*filter by consultant name starts*/

module.exports.getPatientDetailsbycn=async(req, res)=> {
    try {
      const { consultant_name } = req.params;
      console.log(consultant_name);
      const patientsbycn = await Form.find({ "formData.consultant_name": consultant_name });
      console.log(patientsbycn);
      if (!patientsbycn) {
        res.status(404).json({ error: 'Patients not found' });
        return;
      }
      res.json(patientsbycn);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }


  module.exports.searchByMatchingConsultantNames=async(req, res) =>{
    try {
      const { query } = req.params;
const matchingConsultantNames = await Form.find({ "formData.consultant_name": { $regex: query, $options: 'i' } })
  .distinct('formData.consultant_name');

      res.json(matchingConsultantNames);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  /*filter by consultant name ends*/




    /*filter by area pincode starts*/

    module.exports.getPatientDetailsbyareapin=async(req, res)=> {
        try {
          const { pincode } = req.params;
          console.log(pincode);
          const patientsbyareapin = await Form.find({ "formData.pincode": pincode });
          console.log(patientsbyareapin);
          if (!patientsbyareapin) {
            res.status(404).json({ error: 'Patients not found' });
            return;
          }
          res.json(patientsbyareapin);
        } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      }
    
    
      module.exports.searchByMatchingpincodes=async(req, res) =>{
        try {
          const { query } = req.params;
    const matchingPincodes = await Form.find({ "formData.pincode": { $regex: query, $options: 'i' } })
      .distinct('formData.pincode');
    
          res.json(matchingPincodes);
        } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      };

        /*filter by area pincode ends*/


        /*filter by date range starts*/

        module.exports.getPatientDetailsbydaterange=async(req, res)=> {
          try {
            const { startDate, endDate } = req.params;
            console.log(startDate,endDate);
            const patientsbyareapin = await Form.find({ "formData.pincode": pincode });
            console.log(patientsbyareapin);
            if (!patientsbyareapin) {
              res.status(404).json({ error: 'Patients not found' });
              return;
            }
            res.json(patientsbyareapin);
          } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal server error' });
          }
        }


    

