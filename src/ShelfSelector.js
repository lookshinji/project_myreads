import React from 'react';

const ShelfSelector = (props) => {
  const { shelfStatus, onShelfSelect } = props;
  return(
    <div className="book-shelf-changer">
      <select
        value={shelfStatus} onChange={onShelfSelect}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfSelector;
