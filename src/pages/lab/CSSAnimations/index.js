import Styles from './styled';
import React, { useState } from 'react';
import Circle from '../../../components/Icons/Circle';

const CSSAnimations = () => {
  const [currentColor, updateColor] = useState('fuschia');

  return (
    <Styles currentColor={currentColor} className={currentColor}>
      <h1>CSS Animations in JavaScript {'&'} React</h1>
      <button
        className={currentColor === 'fuschia' ? 'active' : null}
        onClick={() => {
          updateColor('fuschia');
        }}
      >
        Pink
      </button>
      <button
        className={currentColor === 'blue' ? 'active' : null}
        onClick={() => {
          updateColor('blue');
        }}
      >
        Blue
      </button>
      <button
        className={currentColor === 'dark' ? 'active' : null}
        onClick={() => {
          updateColor('dark');
        }}
      >
        Dark
      </button>
      <button
        className={currentColor === 'gray' ? 'active' : null}
        onClick={() => {
          updateColor('gray');
        }}
      >
        Gray
      </button>
      <article>
        <h2>Animations</h2>
        <h3>Various ways to create interactions</h3>
        <p>Quick Discussion</p>
      </article>
      <article>
        <h2>👋 Hello I'm Joyanna</h2>
        <h3>Design {'&'} Development</h3>
        <p>I have worked in design and development for over 13 years.</p>
        <Circle color={currentColor} />
        <figure className='circleCrop'>
          <img
            src='https://res.cloudinary.com/labofthingsimages/image/upload/v1645496037/20201227_174511_hcwxly.jpg'
            alt='Joyanna in a hat and jean jacket'
          />
        </figure>
      </article>
      <article>
        <h2>The Problem</h2>
        <h3>The way we create animations</h3>
        <p>
          As designers we use a variety of programs to create interactions. Some
          of these can produce simple code, some of these do not. As developers
          we can import libraries and packages to create animations. Some of
          these are simple... some are not!
        </p>
        <p>
          The purpose of this talk is to go over some of the easy solutions
          using simple CSS to trigger accessible animations. I'll also go over
          how we can do this when using React.
        </p>
      </article>
      <article>
        <h2>✨ CSS Transitions {'&'} Animations</h2>
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
        <h2>🍿 Buttery Smooth CSS Transitions</h2>
        <h3>Understanding How the Browser Works: Critical Rendering Path</h3>
        <ul>
          <li>
            {`Styles > Layout > Paint > Composite`}
            <ol>
              <li>
                Styles:
                <em> calculates styles/fonts</em>
              </li>
              <li>
                Layout:
                <em> width/height; left/right/top/bottom;</em>
              </li>
              <li>
                Paint:
                <em> border-radius;box-shadow; color; background-color;</em>
              </li>
              <li>
                Composite:
                <em> transform:translate/scale/rotate; opacity;</em>
              </li>
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
          rel='noreferrer'
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
        <h2>Transition Examples</h2>
        <h3>Used on Buttons, Accordions {'&'} Many More!</h3>
        <button>Example of a button</button>
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
      <article>
        <h2>Animation Examples</h2>
        <h3>This example is using SVGs with CSS classes.</h3>
        <ul>
          <li>Each class contains an animation</li>
        </ul>
        <figure className='circleCrop'>
          <img
            src='https://res.cloudinary.com/labofthingsimages/image/upload/v1645551608/Screen_Shot_2022-02-22_at_12.35.06_PM_a7gkih.png'
            alt=''
          />
          <figcaption>Link to This Project</figcaption>
        </figure>
      </article>
      <article>
        <h2>Utilizing Javascript + CSS Transitions</h2>
        <hr />
        <h3>Toggle a Class or Data-Attribute</h3>
        <ul>
          <li>
            So now that we have classes, we can use Javascript to “toggle” a CSS
            class on an HTML element. This will make the browser transition
            between each of the properties. <code>{'.toggle(‘myClass’)'}</code>
          </li>
          <li>
            We can do this a variety of ways, a very easy one is to use
            Javascript to “listen” to see if an HTML element has been clicked.
            That will trigger our function which will then add or remove the CSS
            class from our element.
            <code>{'addEventListener(‘click’, myfunction);'}</code>
          </li>
        </ul>
      </article>
      <article>
        <h2>Vanilla Javascript Example</h2>
      </article>
    </Styles>
  );
};

export default CSSAnimations;
