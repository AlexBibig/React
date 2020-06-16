import React from 'react';

const TodoList = () => {
  const items = ['Learn HTML', 'Learn css', 'Learn react'];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>Learn css</li>
      <li>Learn react</li>
    </ul>
  );
};

export default TodoList;
