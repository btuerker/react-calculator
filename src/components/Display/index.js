import './styles.css';
import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => {
  return (
    <div className="display wrapper">
      <div style={{float: 'right'}}>{result}</div>
    </div>
  );
}

Display.propTypes = { result: PropTypes.string.isRequired }

Display.defaultProps = { result: '' }

export default Display;
