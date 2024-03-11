import { useState } from 'react';

export default function ContactForm({saveContact}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     let res = await fetch('/api/contacts', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         name: name,
  //         email: email,
  //         address: address,
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });

  //     let resJson = await res.json();

  //     if (res.status === 200) {
  //       setName('');
  //       setEmail('');
  //       setMessage('User created successfully');
  //     } else {
  //       setMessage(`Some error occured: ${resJson.message}`);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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