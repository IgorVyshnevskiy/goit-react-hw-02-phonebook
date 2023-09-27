import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    phone: '',
  }

  inputHandler = e => {
    const {name, value} = e.currentTarget
    this.setState({
      [name]: value,
    })
  };

  reset = () => {
    this.setState({name: '', phone: '',})
  }

  submitContact = e => {
    e.preventDefault()

    this.props.onSubmit(this.state)
    this.reset()
  }

  

  render() {
    return (
      <form onSubmit={this.submitContact}>
        <label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputHandler}
            required
          />
          Name
        </label>
        <label>
          <input
            type="tel"
            name="phone"
            value={this.state.phone}
            onChange={this.inputHandler}
            required
          />
          Number
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
