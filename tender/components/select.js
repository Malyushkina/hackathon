import React from 'react';
import Select from 'react-select';

const customStyles = {
  option: () => ({
    padding: 20,
    zIndex:999
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 300
  })
};

const CustomSelect = ({ placeholder, data, updateData }) => {
  const onHandleChange = (e) => {
    updateData(e.name);
  };
  return (
    <Select
      styles={customStyles}
      options={data}
      placeholder={placeholder}
      onChange={onHandleChange}
      updateData={updateData}
    />
  );
};

export default CustomSelect;
