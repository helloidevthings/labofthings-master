import Styles from './styled';
import React from 'react';
import HowdyIcon from '../../../components/Icons/HowdyIcon';
import HowdyFood from '../../../components/Icons/HowdyFood';

const Howdy = () => {
  return (
    <Styles>
      <article>
        <HowdyIcon />
        <HowdyFood />
      </article>
    </Styles>
  );
};

export default Howdy;
