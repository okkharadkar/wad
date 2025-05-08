// server.js
const express = require('express');
const app = express();
const path = require('path');

// Serve static files from "public"
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
