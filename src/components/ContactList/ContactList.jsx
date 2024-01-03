// import React from 'react';
// import PropTypes from 'prop-types';
// import css from './ContactList.module.css';

// const MyContactList = ({ contacts, removeContact }) => {
//   if (!contacts || contacts.length === 0) {
//     return <p className={css.noContacts}>No contacts available</p>;
//   }

//   const names = contacts.map(({ id, name, number }) => (
//     <li className={css.list_item} key={id}>
//       <p>{name}</p>
//       <p>:</p>
//       <p>{number}</p>
//       <button
//         className={css.button}
//         onClick={() => removeContact(id)}
//         type="button"
//       >
//         Delete
//       </button>
//     </li>
//   ));

//   return (
//     <div className={css.contacts_wraper}>
//       <ul className={css.contact_items}>{names}</ul>
//     </div>
//   );
// };

// MyContactList.propTypes = {
//   removeContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };

// export default MyContactList;
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getFilteredContacts } from 'Redux/Contacts/contacts-selectors';
import { deleteContact } from 'Redux/Contacts/contacts-operations';
import { fetchContacts } from 'Redux/Contacts/contacts-operations';

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
