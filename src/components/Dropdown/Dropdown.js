import React from 'react';
import Select from 'react-select';

const Dropdown = ({ options, value, onChange, placeholder }) => (
  <Select
    options={options}
    className="dropdown"
    value={value}
    isSearchable={false}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default Dropdown;
