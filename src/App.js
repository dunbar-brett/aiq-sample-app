import { useEffect, useState } from 'react';
import Contacts from './Contacts';
import ContactForm from './ContactForm';


function App() {
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    fetch('/api/contacts')
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(err => console.error(err));
  }, []);

  const handleSaveContact = async (e, contact) => {
    try {
      let res = await fetch('/api/contacts', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      let resJson = await res.json();

      if (res.status === 200) {
        alert('User created successfully');
        setContacts(resJson.contacts);
        e.target.reset();
      } else {
        alert(`Some error occured: ${resJson.message}`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <main className='bg-slate-500 flex min-h-screen flex-col items-center '>
      <h1 className='text-center font-bold text-5xl pb-5 pt-8'>AIQ Contact Manager</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 p-4'>
        <Contacts contacts={contacts} />
        <ContactForm saveContact={handleSaveContact}/>
      </div>
    </main>
  );
}

export default App;
