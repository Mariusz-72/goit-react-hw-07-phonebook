import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getFilteredContacts } from './Redux/Contacts/contacts-selectors';
import { deleteContact } from './Redux/Contacts/contacts-operations';
import { fetchContacts } from './Redux/Contacts/contacts-operations';

import css from './ContactList.module.css';

const MyContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleRemoveContact = id => {
    dispatch(deleteContact(id));
  };

  const names = contacts.map(({ id, name, phone }) => (
    <li key={id}>
      {name} : {phone}
      <button
        className={css.button}
        onClick={() => handleRemoveContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div className={css.contacts_wrapper}>
      <ul className={css.contact_items}>{names}</ul>
    </div>
  );
};

export default MyContactList;
