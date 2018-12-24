import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchTerm, onChange, onSubmit, children }) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
      value={searchTerm}
      onChange={onChange}
    />
    <button type="submit">
      {children}
    </button>
  </form>
);

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Search;