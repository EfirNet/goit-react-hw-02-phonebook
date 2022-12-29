import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import contactsJson from "../contacts.json";
import styled from 'styled-components';






export class App extends Component {
  state = {
    contacts: contactsJson,
    filter: ''
  }

  formSubmitHandler = (data) => {
    console.log(data);
  };

  handleBtnClick = ({ name, number }) => {
    if (
      this.state.contacts.find(
        (item) => item.name.toLowerCase() === name.toLowerCase()
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

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
    console.log(e);
  };

  getFilteredItems = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredItems();


    const Title = styled.h1`
      font-size: 30px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 700;
      color: #B4A7B3;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
border-radius: 5px;
    `;

    const Wrap = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 250px;
      /* outline: 1px solid black; */
      margin: 50px auto;
      padding: 20px;
      background-color: #00000090;
      border-radius: 5px;
      box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
      &:hover {
        box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
      }
    `;

    const Subtitle = styled.h2`
    margin-top: 20px;
   font-size: 26px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 700;
      color: #B4A7B3;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
      border-radius: 5px;
    `

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
