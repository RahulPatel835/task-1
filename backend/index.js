const express = require('express');
const cors = require('cors');
const data = require('./heliverse_mock_data.json');

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/users', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
