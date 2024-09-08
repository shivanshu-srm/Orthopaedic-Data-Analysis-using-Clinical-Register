const Form = require('../models/formmodel');
const stateShortcutsData = require('../misc/stateshortcuts');



async function generatePatientID(formData) {
  const { name, pincode ,slug} = formData;
  const initials = name
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase())
    .join('');

  const slugInitials = slug
    .split('_')
    .map((word) => word.charAt(0).toUpperCase())
    .join('');

  const pincodeDigits = pincode.toString().substring(0, 3).padStart(3, '0');
  const serialNumber = await findAndIncrementSerialNumber(
    initials,
    slugInitials,
    pincodeDigits
  );
  const patientID = `${slugInitials}-${initials}${pincodeDigits}-${serialNumber}`;
  return patientID;
}


async function findAndIncrementSerialNumber(initials, slugInitials, pincodeDigits) {
  try {
    const regex = new RegExp(`^${slugInitials}-${initials}${pincodeDigits}-\\d{1,4}$`);
    const allDocuments = await Form.find({});
    if (!allDocuments) {
      console.log('No documents found.');
      return res.status(500).json({ error: 'No documents found' });
    }

    const matchingids = [];
    
    for (const doc of allDocuments) {
      const patientID = doc.formData.patientID;
      const match = regex.exec(patientID);
            if (match) {
              matchingids.push(match.input)
      }
    }
    console.log(matchingids);

    let highestSerialNumber = 0;

for (const id of matchingids) {
  const parts = id.split('-');
  if (parts.length === 3 && parts[2].match(/^\d+$/)) {
    const serialNumber = parseInt(parts[2]);
    if (serialNumber > highestSerialNumber) {
      highestSerialNumber = serialNumber;
    }
  }
}

console.log(highestSerialNumber);
    return highestSerialNumber + 1;
  } catch (error) {
    console.error('Error finding and incrementing serial number:', error);
    throw error;
  }
}

module.exports.submitForm = async (req, res) => {
  const formData = req.body;
  try {
    console.log(formData);
    const patientID = await generatePatientID(formData);
    formData.patientID = patientID;
    const savedForm = await Form.create({ formData });
    res.json({ patientID, formData: savedForm.formData });
  } catch (error) {
    console.error('Error saving or retrieving form data:', error);
    res.status(500).json({ error: 'Failed to save or retrieve form data' });
  }
};


module.exports.getAllForms = async (req, res) => {
  try {
    const allDocuments = await Form.find({});  
    if (!allDocuments || allDocuments.length === 0) {
      return res.json([]);
    }
    const formsData = allDocuments.map((doc) => doc);
    res.json(formsData);
    console.log(formsData);
  } catch (error) {
    console.error('Error retrieving forms:', error);
    res.status(500).json({ error: 'Failed to retrieve forms' });
  }
};


module.exports.deletePatientRecord = async (req, res) => {
  try {
    const { patientID } = req.params;
    const deletedForm = await Form.findOneAndRemove({ 'formData.patientID': patientID });

    if (!deletedForm) {
      return res.status(404).json({ error: 'Patient record not found' });
    }

    res.json({ message: 'Patient record deleted successfully' });
  } catch (error) {
    console.error('Error deleting patient record:', error);
    res.status(500).json({ error: 'Failed to delete patient record' });
  }
};
