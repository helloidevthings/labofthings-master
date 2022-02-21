import Styles from './styled';
import React from 'react';
import WorkHard from '../../../components/Icons/WorkHard';

const CSSAnimations = () => {
  const links = [
    {
      title: 'Smooth As Butter',
      src: 'https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108',
    },
    {
      title: 'Good Animation Speed',
      src: 'https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9',
    },
    {
      title: 'Learn About SVGs',
      src: 'https://www.pluralsight.com/authors/sarah-drasner?aid=701j0000001heIoAAI&promo=&utm_source=non_branded&utm_medium=digital_paid_search_google&utm_campaign=US_Dynamic&utm_content=&gclid=CjwKCAjwte71BRBCEiwAU_V9hyoo881PG7KxzppCMz4_nFr0Ouf4TdW_h_geKFzGKdcQwQ9adDdkpRoCficQAvD_BwE',
    },
    {
      title: 'Clean your dirty svgs',
      src: 'https://jakearchibald.github.io/svgomg/',
    },
    { title: 'SVG to React', src: 'https://react-svgr.com/' },
    { title: 'EX: Howdy', src: '/howdy' },
    { title: 'EX: Cadre5', src: 'https://www.cadre5.com/' },
    { title: 'Framer Motion', src: 'https://www.framer.com/motion/' },
  ];
  return (
    <Styles>
      <h1>CSS Animations in JavaScript {'&'} React</h1>
      <article>
        <h2>Animations</h2>
        <h3>Various ways to create interactions</h3>
        <p>Quick Discussion</p>
      </article>
      <article>
        <h2>Hello I'm Joyanna</h2>
        <h3>Design {'&'} Development</h3>
        <p>I have worked in design and development for over 13 years.</p>
      </article>
      <article>
        <h2>CSS Transitions {'&'} Animations</h2>
        <h3>Transitions</h3>
        <ul>
          <li>Change between one state and another</li>
          <li>
            Using Ease or a Bezier Curve defines how the browser transitions
            between each state
          </li>
        </ul>
        <h3>Animations</h3>
        <ul>
          <li>Uses Keyframes</li>
          <li>Using Ease or a Bezier Curve define animation</li>
        </ul>
        <p>image of bezier curve</p>
      </article>
      <article>
        <h2>Buttery Smooth CSS Transitions</h2>
        <h3>Understanding How the Browser Works: Critical Rendering Path</h3>
        <ul>
          <li>
            {`Styles > Layout > Paint > Composite`}
            <ol>
              <li>
                Styles: calculates <code>styles/fonts</code>
              </li>
              <li>
                Layout: <code>width/height; left/right/top/bottom;</code>
              </li>
              <li>
                Paint:{' '}
                <code>border-radius;box-shadow; color; background-color;</code>{' '}
              </li>
              <li>Composite: transform:translate/scale/rotate; opacity;</li>
            </ol>
          </li>
          <li>
            Creating 60fps by using properties that paint at the end of the
            process.{' '}
            <i>
              “...avoid using transitions with the left/top/right/bottom
              properties. Those don’t create a fluid animation because they have
              the browser creating layouts each time, which will affect all of
              their children.”
            </i>
          </li>
        </ul>
        <a
          href='https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108'
          target='_blank'
        >
          Smooth As Butter Animations
        </a>
      </article>
      <article>
        <h2>Basic Syntax of Transitions</h2>
        <h3>The browser transitions from one property to another</h3>
        <ul>
          <li>
            Common Transitions <code>transition: all 3s ease-in-out;</code>
          </li>
          <li>
            Calling out a property
            <code>
              transition: color .2s ease-in, transform 8s ease-in-out;{' '}
            </code>
          </li>
          <li>
            Can be combined with hover-states and pseudo elements
            <code>
              {`a { color: blue;  
                  transform: color .2s ease-in; 
                  &:hover {color: pink}
              }`}
            </code>
          </li>
        </ul>
      </article>
      <article>
        <h2>Basic Syntax of Animations</h2>
        <h3>Animations use Keyframes to change properties</h3>
        <ul>
          <li>
            Using Keyframes
            <code>{`@keyframes {from {color:pink} to {color:blue}}`}</code>
          </li>
          <li>
            Keyframe %
            <code>
              {`0%{color: pink} 50%{color: purple} 100%{color:blue};`}
            </code>
          </li>
        </ul>
      </article>
    </Styles>
  );
};

export default CSSAnimations;
