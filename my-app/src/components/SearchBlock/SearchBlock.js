import React from 'react';
import './SearchBlock.css';

const SearchBlock = () => {
  const searchText = 'Search';
  return (
    <div className='SeacrhBlock'>
      <input className='form-control' placeholder={searchText} />
    </div>
  );
};

export default SearchBlock;
