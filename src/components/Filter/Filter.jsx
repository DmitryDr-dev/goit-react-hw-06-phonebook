import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './Filter.module.css';
import contactsActions from '../../redux/contacts-actions';

function Filter() {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterInputId = uuidv4();

  return (
    <div className={styles.filter}>
      <label htmlFor={filterInputId} className={styles.filterLabel}>
        Search
      </label>
      <input
        type="text"
        className={styles.filterInput}
        id={filterInputId}
        value={value}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </div>
  );
}

export default Filter;
