import React from 'react';
import SearchBlock from '../SearchBlock';
import Header from '../Header';
import TodoList from '../TodoList';
import './App.css';
import Filter from '../Filter';
import ItemAddForm from '../ItemAddForm/ItemAddForm';

export default class App extends React.Component {
  cId = 100;

  state = {
    todoData: [
      { text: 'Learn HTML', important: false, done: false, id: 1 },
      { text: 'Learn CSS', important: true, done: false, id: 2 },
      { text: 'Learn JS', important: false, done: false, id: 3 },
    ],
    filter: 'all', // all || active || done
  };

  filter = (arr, filter) => {
    switch (filter) {
      case 'all':
        return arr;
      case 'active':
        return arr.filter((el) => !el.done);
      case 'done':
        return arr.filter((el) => el.done);
      default:
        return arr;
    }
  };

  onDelete = (id) => {
    this.setState((prevState) => {
      const index = prevState.todoData.findIndex((el) => el.id === id);

      const arr = [...prevState.todoData.slice(0, index), ...prevState.todoData.slice(index + 1)];

      return {
        todoData: arr,
      };
    });
  };

  search = (arr, searchText) => {
    if (!searchText) {
      return arr;
    }

    const newArr = arr.filter((item) => {
      return item.text.toUpperCase().includes(searchText.toUpperCase());
    });

    return newArr;
  };

  onAdd = (label) => {
    const obj = {
      text: label,
      important: false,
      id: this.cId++,
    };

    this.setState((prevState) => {
      const newArr = [obj, ...prevState.todoData];

      return {
        todoData: newArr,
      };
    });
  };

  getNewArrAccordingProp = (prop, prevState, id) => {
    const index = prevState.todoData.findIndex((el) => el.id === id);

    const newObj = {
      ...prevState.todoData[index],
      [prop]: !prevState.todoData[index][prop],
    };

    const newArr = [
      ...prevState.todoData.slice(0, index),
      newObj,
      ...prevState.todoData.slice(index + 1),
    ];

    return newArr;
  };

  onToggleDone = (id) => {
    this.setState((prevState) => {
      return {
        todoData: this.getNewArrAccordingProp('done', prevState, id),
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState((prevState) => {
      return {
        todoData: this.getNewArrAccordingProp('important', prevState, id),
      };
    });
  };

  onFilterChange = (filter) => {
    this.setState({
      filter: filter,
    });
  };

  onSearchChange = (search) => {
    this.setState({
      search: search,
    });
  };

  render() {
    const { todoData, filter, search } = this.state;
    const doneSize = this.state.todoData.filter((el) => el.done).length;
    const todoSize = this.state.todoData.length - doneSize;
    const visibleTodos = this.search(this.filter(todoData, filter), search);

    return (
      <div className='App'>
        <Header done={doneSize} todo={todoSize} />
        <div className='line'>
          <SearchBlock onSearchChange={this.onSearchChange} />
          <Filter onFilterChange={this.onFilterChange} filter={filter} />
        </div>
        <ItemAddForm onAdd={this.onAdd} />
        <TodoList
          todos={visibleTodos}
          onDelete={this.onDelete}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
      </div>
    );
  }
}
