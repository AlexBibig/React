import React from 'react';

import './TodoListItem.css';

export default class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState((prevState) => {
      return {
        done: !prevState.done,
      };
    });
  };

  oneExclamationClick = () => {
    this.setState((prevState) => {
      return {
        important: !prevState.important,
      };
    });
  };

  render() {
    const { important } = this.state;
    const { text, onDelete, done } = this.props;

    let classNames = `TodoListItem`;

    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <div className={classNames}>
        <span onClick={this.onLabelClick}>{text}</span>
        <div>
          <button className='btn btn-outline-danger remove-btn' onClick={onDelete}>
            <i className='fa fa-trash'></i>
          </button>
          <button className='btn btn-outline-primary' onClick={this.oneExclamationClick}>
            <i className='fa fa-exclamation'></i>
          </button>
        </div>
      </div>
    );
  }
}
