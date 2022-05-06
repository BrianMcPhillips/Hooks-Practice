import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
  <>
    <img src={image} alt={name} />
    <h3>{name}</h3>
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
