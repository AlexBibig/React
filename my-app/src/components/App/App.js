import React from 'react';
import SearchBlock from '../SearchBlock';
import Header from '../Header';
import TodoList from '../TodoList';
import './App.css';
import Filter from '../Filter';
import ItemAddForm from '../ItemAddForm';
import { render } from '@testing-library/react';

export default class App extends React.Component {
  state = {
    todoData: [
      { text: 'Learn HTML', important: false, done: false, id: 1 },
      { text: 'Learn CSS', important: true, done: false, id: 2 },
      { text: 'Learn JS', important: false, done: false, id: 3 },
    ],
  };

  onDelete = (id) => {
    this.setState((prevState) => {
      const index = prevState.todoData.findIndex((el) => el.id === id);

      const arr = [...prevState.todoData.slice(0, index), ...prevState.todoData.slice(index + 1)];

      prevState.todoData.splice(index, 1);
      return {
        todoData: arr,
      };
    });
  };

  onAdd = (label) => {
    console.log(label);
    const obj = {
      text: label,
      important: false,
      id: this.cId++,
    };

    this.setState((prevState) => {
      const newArr = [...prevState.todoData, obj];
    });
  };

  onToggleDone = (id) => {
    console.log(id);
  };

  render() {
    return (
      <div className='App'>
        <Header done={2} todo={1} />
        <div className='line'>
          <SearchBlock />
          <Filter />
        </div>
        <ItemAddForm onAdd={this.onAdd} />
        <TodoList
          todos={this.state.todoData}
          done={this.state.todoData[1].done}
          onDelete={this.onDelete}
          onToggleDone={this.onToggleDone}
        />
      </div>
    );
  }
}
