import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from '../../Redux/choises';
import { deleteContact } from '../../Redux/Contacts/Operations';



export const ContactList = () => {
  const data = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const onContactDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const createContactsMarkup = ({ id, name, number }) => {
    return (
      <li key={id} >
        <span >
          <b>{name}</b>
        </span>
        <span >
          <i>{number}</i>
        </span>
        <button
         
          type="button"
          onClick={() => onContactDelete(id)}
        >
          Delete
        </button>
      </li>
    );
  };

  if (filter) {
    return (
      <ul >
        {data
          .filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(el => {
            return createContactsMarkup(el);
          })}
      </ul>
    );
  }

  return (
    <ul >
      {data.map(el => {
        return createContactsMarkup(el);
      })}
    </ul>
  );
};

