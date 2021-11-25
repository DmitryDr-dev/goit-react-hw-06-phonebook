import PropTypes from 'prop-types';
import styles from './ContactsListItem.module.css';

export default function ContactsListItem({ name, number, onDelete }) {
  return (
    <div className={styles.contact}>
      <span>
        <span className={styles.contactName}>{name}: </span>
        <span className={styles.contactNumber}>{number}</span>
      </span>
      <button type="button" className={styles.contactDltBtn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
