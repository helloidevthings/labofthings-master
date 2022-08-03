import * as React from 'react';
import styled from '@emotion/styled';

const Styles = styled.svg`
 ${(props) => props.theme.animations.drawIn}

 .item-to {
  ${(props) => props.theme.animations.itemTo}
 }
 .bounce {
  ${(props) => props.theme.animations.bounce2}
 }
`;

const AbstractLines = ({ props, strokeColor }) => (
 <Styles xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 361 449' {...props}>
  <rect
   width={195.09}
   height={195.09}
   x={98.613}
   stroke={`${strokeColor ? strokeColor : '#fff'}`}
   strokeWidth={3}
   rx={97.545}
   transform='rotate(45 98.613 0)'
  />
  <path
   stroke={`${strokeColor ? strokeColor : '#fff'}`}
   strokeWidth={3}
   d='m200.784 84 158.392 158.392-158.392 158.392L42.392 242.392zM270 184v265M293 0v265'
   className='item-to bounce'
   //  style={{ transitionDelay: '0.2s' }}
  />
 </Styles>
);

export default AbstractLines;
