import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Button, Label, Input } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  // randomId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.props.onClick(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const randomId = nanoid();

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={randomId}>
          Name
          <Input
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="enter name..."
            value={this.state.name}
            id={randomId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={randomId}>
          Number
          <Input
            onChange={this.handleChange}
            type="tel"
            name="number"
            placeholder="enter phone number..."
            value={this.state.number}
            id={randomId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button onClick={this.handleSubmit} type="button">
          Add contact
        </Button>
      </Form>
    );
  }
}
