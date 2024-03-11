import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', email: '', address: '' });
  
  useEffect(() => {
    fetch('/api/contacts')
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(err => console.error(err));
  }, []);

  function renderContacts() {
    return contacts.map((contact, index) => (
      <div key={index}>
        <h3>{contact.name}</h3>
        <h4>{contact.email}</h4>
        <p>{contact.address}</p>
      </div>
    ));
  }
  
  return (
    <main>
      <h1>AIQ Contact Manager</h1>
      {renderContacts()}
    </main>
  );
}

export default App;
