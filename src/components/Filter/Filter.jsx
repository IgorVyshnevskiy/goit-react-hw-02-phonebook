const Filter = ({filter, onFilterHandler}) => {
  return (
    <label>
      <input type="text" value={filter} onChange={onFilterHandler} />
      Filter Contacts
    </label>
  );
};


export default Filter