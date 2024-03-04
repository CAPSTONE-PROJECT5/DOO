const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Stage schema
const stageSchema = new Schema({
  stageName: { type: String, required: true },
  sequenceNumber: { type: Number, required: true },
  actions: [{ type: String }] // Actions associated with the stage (e.g., "submit document," "review document")
});

// Define the DecisionPoint schema
const decisionPointSchema = new Schema({
  stageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Stage', required: true },
  condition: { type: String, required: true },
  nextStageIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stage' }]
});

// Define the Workflow schema
const workflowSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
  name: { type: String, required: true },
  description: { type: String },
  stages: [stageSchema], // Array of stages
  decisionPoints: [decisionPointSchema], // Array of decision points
  approvalCriteria: {
    roles: [{ type: String }], // Roles involved in the approval process
    userSelectionLogic: { type: String } // Logic for selecting users from roles
  }
});

// Define the Workflow model
const Workflow = mongoose.model('Workflow', workflowSchema);

module.exports = Workflow;
