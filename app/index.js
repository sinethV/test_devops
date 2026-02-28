// simple Express web server
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// serve static front-end from public/
app.use(express.static(path.join(__dirname, 'public')));

// simple product API
app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'products.json'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});