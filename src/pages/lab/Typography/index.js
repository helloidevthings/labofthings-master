import Styles from './styled';
import React from 'react';

const Typography = () => {
  return (
    <Styles>
      <div className="columns">
        <article className="fluid">
          <h1>Fluid Type</h1>
          <h2>I Scale Based on Window</h2>
          <p>
            The difference between Fluid Typography and Responsive Typography
            can be seen in this example.
          </p>
        </article>
        <article className="responsive">
          <h1>Responsive Type</h1>
          <h2>I scale based on breakpoints</h2>
          <p>
            It's a subtle difference, but if you look closely you'll be able to
            see this paragraph change sizes at each breakpoint.
          </p>
          <p>This paragraph is utilizing 3 breakpoints. </p>
        </article>
      </div>
      <footer>
        <h3>History Lesson</h3>
        <p>
          Wayyyy Back when Typography was young... We sized typography for
          legibility and readability. We spent time setting type in various
          metals...
        </p>
        <p>
          It makes me sad to see the way we size typography on the web. It's
          some of the worst typography I have ever seen... I mean aside from
          some really awful menu designs.
        </p>
        <p>
          There are still some great type designers and developers out there...
          Here are some examples!
        </p>
      </footer>
    </Styles>
  );
};

export default Typography;
