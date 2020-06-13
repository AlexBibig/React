import React from 'react';
import ReactDOM from 'react-dom';
import SearchBlock from './components/SearchBlock';

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
