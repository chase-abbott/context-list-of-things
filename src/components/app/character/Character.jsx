import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => {
  return (
    <figure>
      <img src={image} alt={name}/>
      <figcaption> {name} </figcaption>
    </figure>
  );
};

export default Character;

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
