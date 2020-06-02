import React from 'react';

const SearchBox = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search..."
    className="search-box"
    value={value}
    onChange={onChange}
  />
);

export default SearchBox;
