const express = require('express');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.use(express.static('build'));
app.use(express.json());

let rawdata = fs.readFileSync('contacts.json');
let contacts = JSON.parse(rawdata);


app.get('/api/contacts', (req, res) => {
  res.send(contacts);
});

app.post('/api/contacts', (req, res) => {
  const {
      name,
      email,
      address
  } = req.body;

  if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
  }

  contacts.push({ name, email, address });
  fs.writeFileSync('contacts.json', JSON.stringify(contacts, null, 2));
  res.json({ message: 'New contact created', contacts: contacts});
});


