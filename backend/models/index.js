// index.js

const Document = require('./document');
const DocumentReviewers = require('./documentReviewers');
const DocumentTypes = require('./documentTypes');
const Workflows = require('./workflows');
const Users = require('./users');
const ApprovalStatuses = require('./approvalStatuses');
const ApprovalHistory = require('./approvalHistory');
const DigitalSignatures = require('./digitalSignatures');
const DocumentRepositories = require('./documentRepositories');
const Roles = require('./roles');
const UserRoles = require('./userRoles');
const DocumentTemplates = require('./documentTemplates');
const Departments = require('./departments');

module.exports = {
  Document,
  DocumentReviewers,
  DocumentTypes,
  Workflows,
  Users,
  ApprovalStatuses,
  ApprovalHistory,
  DigitalSignatures,
  DocumentRepositories,
  Roles,
  UserRoles,
  DocumentTemplates,
  Departments,
};
