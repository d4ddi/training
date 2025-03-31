const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let names = [];

// Add a name
app.post('/add-name', (req, res) => {
  const name = req.body.name;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  names.push(name);
  res.json({ message: 'Name added', names });
});
app.delete('/delete-name', (req, res) => {
  const name = req.body.name?.trim();
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  names = names.filter(n => n.toLowerCase() !== name.toLowerCase());
  res.json({ message: 'Name deleted successfully', names });
});

// Get all names
app.get('/names', (req, res) => {
  res.json({ names });
});
// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
