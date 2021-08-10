/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import { compileFunction } from 'vm';

const Slide = ({ content, width, imagePosition = 'center', ...wrapperProps }) => {
  console.log('thid is content from inside slide component', content);
  return (
    <div
      css={css`
        height: 100%;
        width: ${width}px;
        background-image: url('${content}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: ${imagePosition};
      `}
      {...wrapperProps}>
      <img src={content} alt="banana" />
    </div>
  );
};

Slide.propTypes = {
  content: PropTypes.string,
  width: PropTypes.number,
  imagePosition: PropTypes.string,
  wrapperProps: PropTypes.object
};

export default Slide;
