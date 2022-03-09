import * as React from 'react';

const Circle = () => (
  <svg
    className='item-to bounce-3'
    width={74}
    height={74}
    fill='none'
    stroke='var(--secondary)'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx={37} cy={37} r={36} strokeWidth={2} />
  </svg>
);

export default Circle;
