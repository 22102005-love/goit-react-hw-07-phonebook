import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';
import operations from '../../redux/contacts/contacts-operations.js';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [id, setId] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChangeForm = ({ target }) => {
    // console.log(target);
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
    setId(uuidv4());
  };
  const onCheckUnique = name => {
    const existContact = contacts.find(contact => contact.name === name);
    return existContact;
  };
  const handleFormSubmite = event => {
    event.preventDefault();
    onCheckUnique(name)
      ? alert('Contact is exists')
      : dispatch(operations.addContact({ id, name, phone }));
    resetForm();
  };
  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleFormSubmite} className={s.form}>
      <label className={s.formInput}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChangeForm}
          required
          minLength="2"
        />
      </label>
      <label className={s.formInput}>
        Number
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone"
          value={phone}
          onChange={handleChangeForm}
          required
          minLength="10"
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}
export default ContactForm;
