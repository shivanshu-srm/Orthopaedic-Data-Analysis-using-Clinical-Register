const Form = require('../models/formmodel');



/*giant cell tumor controllers*/

module.exports.gctpresentation = async (req, res) => {
  try {
    const { checkedList } = req.query;
    console.log(checkedList);
    const regexPattern = new RegExp(checkedList.join('|'), 'i'); 
    console.log(regexPattern);
    const result = await Form.find({ "formData.presentation": regexPattern });
    res.json(result);
    console.log(result);
  } catch (error) { 
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error'});
  }
};
 
module.exports.gctimaging = async (req, res) => {
    try {
      const { checkedList } = req.query;
      console.log(checkedList);
  
      const regexPattern = new RegExp(checkedList.join('|'), 'i'); 
      console.log(regexPattern);
  
      const result = await Form.find({ "formData.imaging_done": regexPattern });
      res.json(result);
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  module.exports.gctpostopcomp = async (req, res) => {
    try {
      const { checkedList } = req.query;
      console.log(checkedList);
  
      const regexPattern = new RegExp(checkedList.join('|'), 'i'); 
      console.log(regexPattern);
  
      const result = await Form.find({ "formData.post_op_complication": regexPattern });
      res.json(result);
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



