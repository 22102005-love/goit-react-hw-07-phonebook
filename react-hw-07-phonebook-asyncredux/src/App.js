import s from './App.css';
import ContactForm from './components/ContactForm/ContactForm.js';
import ContactList from './components/ContactList/ContactList.js';
import Filter from './components/Filter/Filter.js';

export default function App() {
  return (
    <div className={s.wrapper}>
      <h2 style={{ fontSize: 40 }}>Form Contact</h2>
      <ContactForm />
      <h2 style={{ fontSize: 40 }}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
