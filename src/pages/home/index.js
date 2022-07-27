import React from 'react';
import styled from '@emotion/styled';

const MainStyles = styled.section`
 display: flex;
 flex-wrap: wrap;
 width: 100%;
 max-width: 100vw;
 min-height: 100%;
 background: var(--fuschiaGradient);
 font-family: 'Fira Sans', sans-serif;
 color: #ffffff;
 line-height: 1.1;
 letter-spacing: 0em;
 overflow: hidden;

 nav {
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 1em 0.1em;
  & > * {
   margin: 0.3em;
  }
 }

 a {
  text-decoration: none;
  padding: 0 0.1em;
  position: relative;
  color: #fff;
  font-family: 'loos-normal', sans-serif;
  font-weight: 700;
  font-size: 1.3em;
  letter-spacing: 0.03em;
  z-index: 0;
  transition: color 0.6s ease-in-out;

  &:after {
   content: '';
   background: var(--fuschia);
   height: 3px;
   width: 100%;
   height: 100%;
   transform: scaleY(0.1);
   transform-origin: bottom;
   left: 0;
   position: absolute;
   bottom: 0;
   z-index: -1;
   transition: transform 0.5s cubic-bezier(0.62, 0.01, 0.64, 1.32);
  }

  &:hover {
   color: var(--white);
   &:after {
    transform: scaleY(1);
   }
  }
 }

 // All Animations
 @keyframes rotation {
  from {
   transform: rotate(0deg);
  }
  to {
   transform: rotate(-360deg);
  }
 }
`;

const Hero = styled.section`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;
 margin: 0 auto;
 padding: 3rem 1rem;
`;

const SiteTitle = styled.h1`
 font-size: 2.5rem;
 text-transform: uppercase;
 letter-spacing: 0.03em;
`;

const MyName = styled.h2`
 font-size: 4rem;
`;

const Hello = styled.h3`
 font-size: 3rem;
`;

const QuoteSection = styled.section`
 width: 100%;
 max-width: 100vw;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding: 2rem 0;
 color: #cbadfa;
 text-align: center;
 background: linear-gradient(45deg, #01016a, #4f13a1);

 &:after {
  content: '';
  background: #4f13a1;
  height: 3px;
  width: 200px;
  animation: grow-shrink 5s infinite alternate;

  @keyframes grow-shrink {
   0% {
    transform: scaleX(0);
   }
   100% {
    transform: scaleX(1);
   }
  }
 }
`;

const ImgWrap = styled.div`
 flex: 1 1 auto;
 position: relative;
 z-index: 1;
 margin: 2rem auto;

 .image1 {
  max-width: 300px;
 }
 .image2 {
  max-width: 150px;
  position: absolute;
  top: -4rem;
  right: -2rem;
  ${(props) => props.theme.animations.itemTo}
  ${(props) => props.theme.animations.bounce3}
 }

 &:after {
  content: '';
  background: linear-gradient(45deg, #18097f73, #d43ff154);
  height: 300px;
  width: 300px;
  border-radius: 100%;
  position: absolute;
  left: 10%;
  top: 10%;
  transform: rotate(0deg);
  z-index: -1;
  animation: rotation 12s alternate infinite;
 }

 @keyframes rotation {
  from {
   transform: rotate(0deg);
  }
  to {
   transform: rotate(360deg);
  }
 }
`;

const Home = () => (
 <MainStyles>
  <Hero>
   <header>
    <Hello>Welcome!</Hello>
    <MyName>Joyanna</MyName>
    <SiteTitle>UX UI Design</SiteTitle>
    <nav>
     <a href='https://www.joyannahirst.com' target='blank'>
      Portfolio
     </a>
     <a href='/lab'>Dev Lab</a>
     <a href='/css-animations'>CSS Animations</a>
    </nav>
   </header>
   <ImgWrap>
    <figure className='image2'>
     <img
      src='https://res.cloudinary.com/labofthingsimages/image/upload/v1658948384/triangle_raztfw.png'
      alt='floating 3d triangle'
     />
    </figure>
    <figure className='image1'>
     <img
      src='https://res.cloudinary.com/labofthingsimages/image/upload/v1658948938/phone3d4_rsqylc.png'
      alt='floating 3d phone'
     />
    </figure>
   </ImgWrap>
  </Hero>
  <QuoteSection>
   <blockquote>
    I enjoy creating Designs and CSS Animations. This is my personal website. I use this to test out
    ideas and link to my portfolio.
   </blockquote>
  </QuoteSection>
 </MainStyles>
);
export default Home;
