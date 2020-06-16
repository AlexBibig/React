import React from 'react';

const Header = () => {
  const st = {
    fontSize: '40px',
    color: 'tomato',
    textAlign: 'center',
  };
  return (
    <h1 style={st} className='Header'>
      Todo List
    </h1>
  );
};

export default Header;
