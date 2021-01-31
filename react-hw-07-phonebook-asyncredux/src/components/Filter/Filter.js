import * as actions from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.filter}>
      Find contact by name
      <input
        type="text"
        name="filter"
        value={filter}
        required
        onChange={({ target }) => dispatch(actions.filterChange(target.value))}
        placeholder="Enter name for search"
      ></input>
    </label>
  );
};
export default Filter;
