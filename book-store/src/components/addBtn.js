import React from 'react';
import PropTypes from 'prop-types';
import '../styles/addBook.css';

const AddButton = ({ onClick, children }) => (
  <button type="submit" onClick={onClick} className="btnAdd">
    {children}
  </button>
);

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

AddButton.defaultProps = {
  children: null,
};

export default AddButton;
