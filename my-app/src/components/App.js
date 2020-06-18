import React from 'react';
import SearchBlock from './SearchBlock';
import Header from './Header';
import TodoList from './TodoList';

const App = () => {
  const todoData = [
    { text: 'Learn HTML', important: false, id: 1 },
    { text: 'Learn CSS', important: true, id: 2 },
    { text: 'Learn JS', important: false, id: 3 },
  ];
  //корневой компонент, в который подключают все остальные компоненты
  return (
    <div>
      <Header />
      <SearchBlock />
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
