const mongoose = require('mongoose');

const documentTemplateSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  templateName: String,
  contentStructure: {
    title: String,
    sections: [
      {
        heading: String,
        paragraphs: [String]
      }
    ]
  }
});

// Export the schema
module.exports = documentTemplateSchema;
