import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from '../../Redux/filterSlice';
import { selectFilter } from '../../Redux/choises';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filterChange(e.target.value));
  };

  return (
    <div>
      <label>
        Find Contacts
        <input
          type="text"
          onChange={handleFilterChange}
          name="filter"
          value={filterValue}
        />
      </label>
    </div>
  );
};
