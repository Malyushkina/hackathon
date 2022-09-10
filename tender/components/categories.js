import React from 'react';
import Select from 'react-select';
import goods from '../mocks/goods.json';

const options = [
  { value: 'add', label: 'Расходные материалы и комплектующие для лазерных принтеров и МФУ' }
];
const customStyles = {
  option: () => ({
    padding: 20
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 600
  })
};
const CategoriesSelect = () => {
  return <Select styles={customStyles} options={options} placeholder='Выберите категорию' />;
};

export default CategoriesSelect;
