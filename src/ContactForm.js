import { useState } from 'react';

export default function ContactForm({saveContact}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={(e) => saveContact(e, {name: name, email: email, address: address})}>
        <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
        <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input type='text' placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
}