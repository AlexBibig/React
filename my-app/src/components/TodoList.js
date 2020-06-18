import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
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
