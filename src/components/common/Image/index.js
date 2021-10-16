import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { base } from '../base';

const ImageWrapper = styled('img')(
    base,
  {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
);

const Image = ({ src, alt, ...props }) => (
  <ImageWrapper src={src} alt={alt} {...props} />
);

export default Image;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  m: 0,
};
