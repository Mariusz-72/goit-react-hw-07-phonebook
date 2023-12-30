import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { saveContact, deleteContact, loadContacts } from '../../redux/contacts';
import { setFilter } from '../../redux/filters';
import MyContactForm from '../MyContactForm/MyContactForm';
import MyContactList from '../ContactList/ContactList';
import MyContactsFilter from '../MyContactsFilter/MyContactsFilter';
import { nanoid } from 'nanoid';
import css from './MyContacts.module.css';

const MyContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filters);
const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
      const savedContacts = localStorage.getItem('contacts');
      if (savedContacts) {
        dispatch(loadContacts(JSON.parse(savedContacts)));
        setDataLoaded(true);
      }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

    if (!dataLoaded) {
      return null; 
    }

  const addContact = ({ name, number }) => {
    if (isDuplicate(name)) {
      return alert(`${name} is already in your contacts`);
    }

    dispatch(saveContact({ id: nanoid(), name, number }));
  };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const isDuplicate = name => {
    const normalizedName = name.toLowerCase();
    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  const getFilteredContacts = () => {
    const normalizedName = filter.toLowerCase();
    return filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedName)
        )
      : contacts;
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <div className={css.phone_part}>
        <h2 className={css.title}>Phonebook</h2>
        <MyContactForm onSubmit={addContact} />
        <MyContactsFilter handleChange={handleFilter} value={filter} />
      </div>
      <div className={css.contacts_list}>
        <h2 className={css.title}>Contacts</h2>
        <MyContactList
          removeContact={removeContact}
          contacts={filteredContacts}
        />
      </div>
    </div>
  );
};

export default MyContacts;
