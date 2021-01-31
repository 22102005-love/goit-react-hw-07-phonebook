import s from './ContactList.module.css';
import { useEffect } from 'react';
import operations from '../../redux/contacts/contacts-operations.js';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onRemove = id => dispatch(operations.removeContact(id));
  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, []);
  if (contacts.length === 0) return null;
  return (
    <ol className={s.listContact}>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
          <button
            className={s.buttonDelete}
            onClick={() => onRemove(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
};
export default ContactList;
