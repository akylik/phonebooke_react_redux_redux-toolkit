import React, { Component } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';

// import * as actions from '../../redux/actions';
import * as actions from '../../redux/contactList-action';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitProps(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputID}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
              id={this.nameInputId}
              className={styles.input}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
              className={styles.input}
            />
          </label>
          <button type="submit" className={styles.input}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//    //  contacts: state.contacts,
//     v: 25,
//   };
// };

const mapDispatchToProps = dispatch => ({
    onSubmitProps: data => dispatch(actions.addContact(data)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
