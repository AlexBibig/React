import React from 'react';
import './SearchBlock.css';

export default class SearchBlock extends React.Component {
  state = {
    searchText: '',
  };

  onSearchTextChange = (event) => {
    console.log(event.target.value);
    this.setState({
      searchText: event.target.value,
    });
    console.log(this.state.searchText);
    this.props.onSearch(this.state.searchText);
  };

  render() {
    const searchPlaceholder = 'Search';
    const { searchText } = this.state;

    return (
      <div className='SearchBlock'>
        <input
          className='form-control'
          placeholder={searchPlaceholder}
          onChange={this.onSearchTextChange}
          value={searchText}
        />
      </div>
    );
  }
}
