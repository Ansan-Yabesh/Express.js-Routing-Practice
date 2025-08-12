const express = require('express');
const path = require('path');
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');

const app = express();

// Serve static files (CSS)
app.use('/public', express.static(path.join(__dirname, '/public')));

// Use home and about routes
app.use('/', homeRoute);
app.use('/about', aboutRoute);

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views/error.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Buddy you are running localhost 3k`);
});