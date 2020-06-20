import React from 'react';

import './Filter.css';

const Filter = () => {
  return (
    <div className='Filter btn-group'>
      <button className='btn btn-primary'>All</button>
      <button className='btn btn-secondary'>Active</button>
      <button className='btn btn-secondary'>Done</button>
    </div>
  );
};

export default Filter;
