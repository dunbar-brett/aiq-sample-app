const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.use(express.static('build'));

const exampleContacts = [
  {
    name: 'John Doe',
    email: 'johndoe@test.com',
    address: '1234 Elm St, Springfield, IL 62701',
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@test.com',
    address: '1234 Fake St, Test, AZ 85745',
  },
  {
    name: 'Bob Johnson',
    email: 'bobby@test.com',
    address: '4321 Weird St, Portland, OR 97202',
  },
  {
    name: 'Sally Johnson',
    email: 'sally@test.com',
    address: '4321 Weird St, Portland, OR 97202',
  }
]


// Should have an endpoint to list contacts using a GET request
app.get('/api/contacts', (req, res) => {
  res.send(exampleContacts);
});

// Should have an endpoint to receive a POST request to create a new contact
app.post('/api/contacts', (req, res) => {
  res.json({ message: 'New contact created' });
});

// A contact should have a name (required), email (required) and an address
// (optional)
// Should have basic validation for any required fields
