import { Component } from 'react';
import ContactList from './ContqctList/ContactList';
import ContactForm from 'ContactForm';
import shortid from 'shortid';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const {name, phone} = data

    const contact = {
      id: shortid.generate(),
      name,
      number: phone,
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
  }

  filterContactsHandler = e => {
    this.setState({filter: e.currentTarget.value})
  }

  renderContactsFilter = () => {
    const {contacts, filter} = this.state;

    const normalizedFilter = filter.toLocaleLowerCase()
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter))
  }

  deleteContact = numberId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(number => number.id !== numberId),
    }));
  };

  render() {
    const {filter} = this.state;
    const visibleContacts = this.renderContactsFilter()

    return (
      <>
        <Filter filter={filter} onFilterHandler={this.filterContactsHandler}/>
        <ContactList
          contacts={visibleContacts}
          onDelete={this.deleteContact}
        />

        <ContactForm onSubmit={this.formSubmitHandler}/>
      </>
    );
  }
}

export default App;
