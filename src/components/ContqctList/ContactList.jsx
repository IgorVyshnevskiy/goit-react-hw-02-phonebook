import ContactItem from "components/ContactItem"


const ContactList = ({contacts, onDelete}) => {
  return (
    <ul>
      <ContactItem contacts={contacts} onDelete={onDelete}/>
    </ul>
  )
}

export default ContactList

