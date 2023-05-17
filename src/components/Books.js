import React from 'react';
import PropTypes from 'prop-types';

const Books = ({
  id, title, author, onRemove,
}) => (
  <div>
    <h3>{title}</h3>
    <p>{author}</p>
    <button type="button" onClick={() => onRemove(id)}>
      Remove
    </button>
  </div>
);

Books.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Books;
