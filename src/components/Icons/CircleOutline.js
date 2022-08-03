import * as React from 'react';
import styled from '@emotion/styled';

const CircleOutline = ({ strokeColor, props }) => {
 const Styles = styled.svg`
  ${(props) => props.theme.animations.drawIn}
 `;
 return (
  <Styles
   xmlns='http://www.w3.org/2000/svg'
   fill='none'
   viewBox='0 0 395 395'
   {...props}
   style={{ position: 'absolute' }}
  >
   <circle
    cx={197.5}
    cy={197.5}
    r={195.5}
    stroke={strokeColor ? strokeColor : '#fff'}
    strokeWidth={4}
   />
  </Styles>
 );
};

export default CircleOutline;
