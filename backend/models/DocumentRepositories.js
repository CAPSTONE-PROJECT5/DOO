const mongoose = require('mongoose');
const { Schema } = mongoose;

const documentRepositorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  location: {
    type: String,
    required: true
  },
  // Additional fields as needed (e.g., accessControlList: [{ type: Schema.Types.ObjectId, ref: 'AccessControl' }])
});

// Export the schema
module.exports = mongoose.model('DocumentRepository', documentRepositorySchema);
