import React from 'react';
import styles from './Filter.module.css';
import { connect } from 'react-redux';

// import * as actions from '../../redux/actions';
import * as actions from '../../redux/contactList-action';



const Filter = ({ value, onChange }) => (
  <label className={styles.container} >
    Find contacts by name <input type="text" value={value} onChange={onChange} />
  </label>
);

const mapStateToProps = state => ({
  value: state.filter.filter,
  //   value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.filteredContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
