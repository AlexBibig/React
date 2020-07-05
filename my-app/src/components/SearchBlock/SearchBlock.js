import React from 'react';
import './SearchBlock.css';

// const SearchBlock = () => {
//     const searchText = 'Search';
//     return (
//     <div className="SearchBlock">
//         <input className="form-control" placeholder = {searchText}
//     /></div>);
// }

// export default SearchBlock;

export default class SearchBlock extends React.Component {
  state = {
    inputText: '',
  };

  onSearchTextChange = (event) => {
    console.log(event.target.value);

    this.setState({
      inputText: event.target.value,
    });
    this.props.onSearch();
  };

  render() {
    const searchText = 'Search';
    const { inputText } = this.state;

    return (
      <div className='SearchBlock'>
        <input
          className='form-control'
          placeholder={searchText}
          onChange={this.onSearchTextChange}
          value={inputText}
        />
      </div>
    );
  }
}
