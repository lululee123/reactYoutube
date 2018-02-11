import React, {Component} from 'react';

class SearchBar extends Component{
  constructor (props) {
    super(props);

    this.state = {term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={event => this.setState({term: event.target.value})}/>
        <button
          onClick={event => this.onInputChange(event.target.value)}>
          search
        </button>
      </div>
    );
  }
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
