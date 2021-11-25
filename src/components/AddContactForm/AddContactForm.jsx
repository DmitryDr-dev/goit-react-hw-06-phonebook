import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddContactForm.module.css';
import contactsActions from '../../redux/contacts-actions';
import { getContacts } from '../../redux/contacts-selectors';

function AddContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onAddContact = newContact =>
    dispatch(contactsActions.addContact(newContact));

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const checkForDuplicatedContacts = (allContacts, newContact) => {
    const normalizedContact = newContact.name.toLowerCase();

    if (
      allContacts.find(
        contact => contact.name.toLowerCase() === normalizedContact,
      )
    ) {
      alert(`${newContact.name} already exists!`);
      return;
    }

    onAddContact(newContact);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value.trim());
        break;
      case 'number':
        setNumber(value.trim());
        break;
      default:
        return;
    }
  };

  const clearInput = () => {
    setNumber('');
    setName('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = { id: uuidv4(), name, number };

    checkForDuplicatedContacts(contacts, newContact);

    clearInput();
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label className={styles.contactFormLabel} htmlFor={nameInputId}>
        Name
      </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        id={nameInputId}
        value={name}
        onChange={handleInputChange}
        className={styles.contactFormInput}
      />
      <label className={styles.contactFormLabel} htmlFor={numberInputId}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        id={numberInputId}
        value={number}
        onChange={handleInputChange}
        className={styles.contactFormInput}
      />
      <button type="submit" className={styles.contactFormBtn}>
        Add Contact
      </button>
    </form>
  );
}

export default AddContactForm;
