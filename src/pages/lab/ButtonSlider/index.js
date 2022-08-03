import Styles from './styled';
import styled from '@emotion/styled';
import React, { useState, useEffect, useRef } from 'react';
import ButtonBG from '../../../components/Parts/ButtonBG';

const StyleWrap = styled.div`
 background: white;
 width: 100%;
 max-width: 100vw;
 padding: 1rem;
`;

const ButtonSlider = () => {
 const navItems = [
  { name: 'Design', path: '/portfolio' },
  { name: 'Dev', path: '/dev' },
  // { name: 'Lab', path: '/lab' },
  // { name: 'About', path: '/about' },
  // { name: 'Blog', path: '/blog' },
 ];
 const [active, setActive] = useState(0);
 const [positions, setPosition] = useState({
  width: 116,
  X: 0,
  Y: 0,
 });

 // this ref would be to size the width of the first el, w/o doing it manually
 const buttonRef = useRef();

 useEffect(() => {
  console.log('nothing to see here...');
  //   const firstButtonWidth = buttonRef.current.querySelector('button');
  //   setPosition(firstButtonWidth.clientWidth);
 }, [buttonRef]);

 return (
  <StyleWrap>
   <h2>Button Slider</h2>
   <Styles active={active}>
    {navItems.map(({ name }, i) => {
     // first we add the active class to the button el. then we grab the width and left offset position
     // and update the background div's position to match
     const handleClick = (e) => {
      setActive(i);
      const { clientWidth, offsetLeft } = e.currentTarget;
      setPosition({ ...positions, X: offsetLeft, width: clientWidth });
     };
     return (
      <button
       className={`${active === i ? 'active' : ''} baseButton`}
       key={i}
       onClick={handleClick}
       ref={i === 0 ? buttonRef : null}
      >
       {name}
      </button>
     );
    })}
    {/* I'm passing the target info into the div below, this could also be a psedo element */}
    <ButtonBG
     X={positions.X}
     Y={positions.Y}
     width={positions.width}
     className='buttonBG'
    ></ButtonBG>
   </Styles>
  </StyleWrap>
 );
};

export default ButtonSlider;
