import './search-box.styles.css';

export const SearchBox = ({ changeHandler, placeholder }) => {
  return (
    <input
      className='search-box'
      type='search'
      onChange={changeHandler}
      placeholder={placeholder}
    />
  );
};
