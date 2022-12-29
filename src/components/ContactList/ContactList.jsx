import PropTypes from 'prop-types';
import { Ul, Button, Name, Number } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <Ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} id={id}>
        <Name>{name}</Name>
        <Number>{number}</Number>
        <Button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </Button>
      </li>
    ))}
  </Ul>
);

ContactList.propTypes = {
  contacts: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};
