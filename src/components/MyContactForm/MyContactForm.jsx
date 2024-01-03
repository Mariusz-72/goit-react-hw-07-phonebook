import { useState } from 'react';
import { addContact } from '../Redux/Contacts/contacts-operations';
import { getAllContacts } from '../Redux/Contacts/contacts-selectors';

import { useSelector, useDispatch } from 'react-redux';

import css from './MyContactForm.module.css';

const MyContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(result);
  };

  const handleAddContact = ({ name, phone }) => {
    if (isDublicate(name)) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact({ name, phone }));

    setName('');
    setPhone('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit = handleAddContact({ name, phone });
  };

  return (
    <div className={css.phonebook_wrapper}>
      <form className={css.phonebook_form} onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className={css.input}
          onChange={event => setName(event.target.value)}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          placeholder="contact name"
        />

        <label>Number</label>
        <input
          className={css.input}
          onChange={event => setPhone(event.target.value)}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          placeholder="contact number"
        />

        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default MyContactForm;