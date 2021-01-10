const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;
const connectDB = require('./config/db');

/// db connection
connectDB();
/// making images public access
app.use(express.static(path.join(__dirname, 'images')));
/// init body parser
app.use(express.json());
/// method debug
app.use((req, res, next) => {
  console.log('%s %s', req.method, req.url);
  next();
});
/// api routes
app.use('/api/image', require('./api/image'));

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});
