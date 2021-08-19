import Styles from './styled';
import React, { useState } from 'react';
import ButtonBG from '../../../components/Parts/ButtonBG';

const ButtonSlider = () => {
  const navItems = [
    { name: 'Design', path: '/portfolio' },
    { name: 'Dev', path: '/dev' },
    { name: 'Lab', path: '/lab' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];
  const [active, setActive] = useState(0);
  const [positions, setPosition] = useState({
    width: 0,
    X: 0,
    Y: 0,
  });
  return (
    <section>
      <h2>Button Slider</h2>
      <Styles active={active}>
        {navItems.map(({ name }, i) => {
          const handleClick = (e) => {
            setActive(i);
            const { clientWidth, offsetLeft } = e.currentTarget;
            setPosition({ ...positions, X: offsetLeft, width: clientWidth });
            console.log(positions.X);
          };
          return (
            <button
              className={`${active === i ? 'active' : ''} baseButton`}
              key={i}
              onClick={handleClick}
            >
              {name}
            </button>
          );
        })}
        <ButtonBG
          X={positions.X}
          Y={positions.Y}
          width={positions.width}
          className="buttonBG"
        ></ButtonBG>
      </Styles>
    </section>
  );
};

export default ButtonSlider;
