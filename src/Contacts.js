export default function Contacts({contacts}) {
  return (
    <aside className='w-1/3 px-4 h-fit'>
      <h2 className="font-bold text-xl pb-4">Contacts:</h2>
      {
        contacts.map((contact, index) => (
          <div key={index} className='w-96 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Address:</strong> {contact.address}</p>
          </div>
        ))
      }
    </aside>
  );
}