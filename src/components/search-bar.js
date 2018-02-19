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
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})}
          onKeyDown={this.keyPress} />
        <button
          id="myBtn"
          value={this.state.term}
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
  keyPress(e){
    if(e.keyCode == 13){
      document.getElementById('myBtn').click();
    }
  }
}

export default SearchBar;
