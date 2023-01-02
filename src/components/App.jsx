import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from './Filter';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import contactsJson from '../contacts.json';
import { Title, Wrap, Subtitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: contactsJson,
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  handleBtnClick = ({ name, number }) => {
    if (
      this.state.contacts.find(
        item => item.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts!`);
    } else {
      const contact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredItems = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredItems();

    return (
      <>
        <Wrap>
          <Title>Phonebook</Title>
          <ContactForm
            onClick={this.handleBtnClick}
            onSubmit={this.formSubmitHandler}
          />

          <Subtitle>Contacts</Subtitle>
          <Filter value={filter} onChange={this.changeFilter} />

          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Wrap>
      </>
    );
  }
}
