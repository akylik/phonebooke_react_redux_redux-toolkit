import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
// import shortid from 'shortid';

class App extends Component {
  //   state = {
  //     contacts: [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ],
  //     name: '',
  //     filter: '',
  //   };
//   state = {
//     contacts: [],
//     name: '',
//     filter: '',
//   };

//   componentDidMount() {
   //  const contacts = localStorage.getItem('contacts');
   //  const parsedContacts = JSON.parse(contacts);

   //  if (parsedContacts) {
   //    this.setState({ contacts: parsedContacts });
   //  }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const nextContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;

//     if (nextContacts !== prevContacts) {
//       localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }
//   }

//    dublicateContact = name => {
//       const { contacts } = this.state;
//       const isFind = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

//       if (isFind) {
//             //  this.setState(({ contacts }) => ({
//             //    contacts: [contacts],
//             //  }));
//          this.deleteContact(isFind.id);
//          alert('Контакт уже есть в списке !');
//       }
//    }
   
//   formSubmitHandler = data => {
//     //   console.log(data);
//     const {name, number} = data;
     
//    //   const contact = {
//    //    id: shortid.generate(),
//    //    name: data.name,
//    //    number: data.number,
//    //  };
//      const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };
//    //  this.setState(prevState => ({
//    //    contacts: [contact, ...prevState.contacts],
//    //  }));
//      this.setState(({ contacts }) => ({
//        contacts: [contact, ...contacts],
//      }));
//      this.dublicateContact(name);
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };   
   
   
//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilterer = filter.toLocaleLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilterer),
//     );
//   };



  render() {
   //  const filteredContacts = this.getVisibleContacts();
    return (
      <>
        <div>
          <ContactForm/>
          {/* <ContactForm onSubmitProps={this.formSubmitHandler} /> */}
          <Filter/>
          {/* <Filter value={this.state.filter} onChange={this.changeFilter} /> */}
          <ContactsList
            // contacts={filteredContacts}
            // onDeleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
