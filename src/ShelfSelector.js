import React, { Component } from 'react';

class ShelfSelector extends Component {
  render(){
    return(
      <div className="book-shelf-changer">
        <select
          value={this.props.shelfStatus ? this.props.shelfStatus : 'none' } onChange={this.props.handleShelfSelect}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfSelector;
