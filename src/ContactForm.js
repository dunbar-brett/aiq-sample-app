import { useState } from 'react';

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const validateEmail = (email) => emailRegex.test(email);

export default function ContactForm({saveContact}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    if (!name) {
      setMessage('Name is required');
      return;
    }

    if (!email) {
      setMessage('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Email is invalid');
      return;
    }

    saveContact(e, {name, email, address});
  }

  return (
    <section className='h-fit bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-11'>
      <h3 className="text-center font-bold text-xl pb-5">Contact Form</h3>
      <form className='mx-auto pb-4' onSubmit={handleSubmit}>
        <input type='text' 
          placeholder='Name'
          className='peer block w-full rounded-md border border-gray-300 py-2 pl-2 mb-8'
          onChange={(e) => setName(e.target.value)}
        />
        
        <input type='email'
          placeholder='Email'
          className='peer block w-full rounded-md border border-gray-300 py-2 pl-2 mb-8'
          onChange={(e) => setEmail(e.target.value)}
        />

        <input type='text'
          placeholder='Address'
          className='peer block w-full rounded-md border border-gray-300 py-2 pl-2 mb-12'
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          className='w-full mb-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none'>Submit</button>
        <p className='h-2 text-red-600 text-center'>{message}</p>
      </form>
    </section>
  );
}