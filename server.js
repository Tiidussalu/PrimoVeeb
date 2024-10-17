// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Default port is 3000

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World! This is my Express server.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
