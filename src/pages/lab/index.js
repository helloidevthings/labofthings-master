import React from 'react';
import Styles from './styled';

const Lab = () => {
 const links = [
  {
   title: 'CSS Animations',
   src: '/css-animations',
   desc: 'CSS Animations & Transitions talk given at Codestock',
  },
  {
   title: 'Typography',
   src: '/typography',
   desc: 'Type that Scales!',
  },
  {
   title: 'Button Slider',
   src: '/button-slider',
   desc: 'Slider Menu',
  },
  {
   title: 'Howdy',
   src: '/howdy',
   desc: 'Neon Sign Animating',
  },
  {
   title: 'Holiday Happy Hour',
   src: '/onlineparty',
   desc: 'Testing CSS Grid',
  },
 ];
 return (
  <Styles>
   <div>
    <h1>Dev Lab</h1>
    <p>A place to try out new projects</p>
    <ul>
     {links.map(({ title, src, desc }, i) => {
      return (
       <li key={`item ${i}`}>
        <a href={`${src}`} key={`link ${i}`} target='blank'>
         {title}
        </a>
        <ul>
         <li>{desc}</li>
        </ul>
       </li>
      );
     })}
    </ul>
   </div>
  </Styles>
 );
};

export default Lab;
