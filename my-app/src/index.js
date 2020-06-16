import React from 'react';
import ReactDOM from 'react-dom';
import SearchBlock from './components/SearchBlock';
import Header from './components/Header';
import TodoList from './components/TodoList';

const App = () => {
  const isLogged = true;

  const loginBlock = <span>Sign in</span>;
  const welcome = <span>Hello</span>;
  //корневой компонент, в который подключают все остальные компоненты
  return (
    <div>
      {isLogged ? welcome : loginBlock}
      <Header />
      <SearchBlock />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
