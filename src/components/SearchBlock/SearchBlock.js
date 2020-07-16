import React from 'react';
import './SearchBlock.css';

export default class SearchBlock extends React.Component {
  state = {
    searchText: '',
  };

  onSearchChange = (event) => {
    this.setState({ searchText: event.target.value });
    this.props.onSearchChange(event.target.value);
  };

  render() {
    return (
      <div className='SearchBlock'>
        <input
          onChange={this.onSearchChange}
          className='form-control'
          placeholder='Search'
          value={this.state.searchText}
        />
      </div>
    );
  }
}
