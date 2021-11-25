import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactsList.module.css';
import contactsActions from '../../redux/contacts-actions';
import ContactsListItem from '../ContactsListItem';

function ContactsList() {
  const contacts = useSelector(state => state?.contacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <ul className={styles.contacts}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={styles.contactsItem}>
            <ContactsListItem
              name={name}
              number={number}
              onDelete={() => onDeleteContact(id)}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactsList;
