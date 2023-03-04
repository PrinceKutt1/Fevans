// Import required modules
const express = require('express');

// Create Express app
const app = express();
const Port = 4000;

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Sever to test our security mitigation solutions!');
});

// Start the server
console.log('Starting server on port ' + Port);
app.listen(Port, () => {
  console.log('Server started on port ' + Port);
});
