

const ContactItem = ({contacts, onDelete}) => {
  return (
   contacts.map(({id, number, name}) => (
    <li key={id}>
      {name}: {number}
      <button onClick={() => onDelete(id)}>Delete contact</button>
    </li>
   ))
  )
}

export default ContactItem