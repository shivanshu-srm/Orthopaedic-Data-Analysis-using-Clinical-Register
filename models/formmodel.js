const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  formData: {
    type: mongoose.Schema.Types.Mixed, 
  }
},
  {
    timestamps: true   
}
);

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
