import React from 'react';
import TodoListItem from '../TodoListItem';

import './TodoList.css';

const TodoList = (props) => {
  console.log(props);

  const elements = props.todos.map((item) => {
    const { id, ...otherProps } = item;
    return (
      <li key={item.id}>
        <TodoListItem {...otherProps} />
      </li>
    );
  });
  return <ul className='list-group'>{elements}</ul>;
};

export default TodoList;
