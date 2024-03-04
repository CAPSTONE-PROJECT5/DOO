// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const documentsRouter = require('./routes/documents'); // Import document routes
const templatesRouter = require('./routes/templates');  // Import template routes

// Create Express application
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/Digital_office_optimization', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define routes
// app.use('/api/users', require('./routes/users')); // Example route
app.use('/documents', documentsRouter);
app.use('/templates', templatesRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
