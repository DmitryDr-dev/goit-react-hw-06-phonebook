import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import * as contactsActions from '../../redux/contacts-actions';

// styles import
import './Filter.css';

function Filter({ value, onFilterChange }) {
  const filterInputId = uuidv4();

  return (
    <div className="filter">
      <label htmlFor={filterInputId} className="filter__label">
        Search
      </label>
      <input
        type="text"
        className="filter__input"
        id={filterInputId}
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onFilterChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
