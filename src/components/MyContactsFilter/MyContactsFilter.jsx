// import React from 'react';
// import PropTypes from 'prop-types';
// import css from './MyContactsFilter.module.css';

// const MyContactsFilter = ({ handleChange, value }) => {
//   return (
//     <div className={css.filter_wrap}>
//       <label>Find contact by name :</label>
//       <input
//         className={css.input}
//         onChange={handleChange}
//         name="filter"
//         type="text"
//         value={value}
//       />
//     </div>
//   );
// };

// MyContactsFilter.propTypes = {
//   handleChange: PropTypes.func.isRequired,
//   value: PropTypes.string,
// };

// export default MyContactsFilter;
import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from 'Redux/Filter/filter-selectors';
import { setFilter } from 'Redux/Filter/filter-slice';

import css from './MyContactsFilter.module.css';

const MyContactsFilter = () => {
  const onSetFilter = payload => {
    dispatch(setFilter(payload));
  };

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    onSetFilter(e.target.value);
  };

  return (
    <div className={css.filter_wrap}>
      <label>Find contacts by name</label>
      <input
        className={css.input}
        onChange={handleFilter}
        name="filter"
        type="text"
        value={filter}
      />
    </div>
  );
};

export default MyContactsFilter;