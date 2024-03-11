export default function Contacts({contacts}) {
  return (
    <>
    <h2>Contacts:</h2>
    {
      contacts.map((contact, index) => (
        <div key={index}>
          <h3>{contact.name}</h3>
          <h4>{contact.email}</h4>
          <p>{contact.address}</p>
        </div>
      ))
    }
    </>
  );
}