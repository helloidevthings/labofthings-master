import React from 'react';
import Styles from './styled';

const Home = () => (
  <Styles>
    <main>
      <div className="title">
        <h1>Hello I'm Joyanna</h1>
      </div>
    </main>
    <nav>
      <ul>
        <li>
          <a href="https://www.joyannahirst.com" target="blank">
            Portfolio
          </a>
        </li>
        <li>
          <a href="/lab">Development</a>
        </li>
      </ul>
    </nav>
    <section>
      <h2>Design+Development</h2>
      <p>
        I fall into a hybrid role that InVision calls{' '}
        <a href="https://www.invisionapp.com/inside-design/design-engineering-definition-excerpt/">
          "design engineer"
        </a>
        . Which honestly seems like a strange word to use. Anyway, I make cool
        things and dabble in this and that. You can explore my work on this
        site.
      </p>
    </section>
    <section>
      <h2>Work History</h2>
      <ul>
        <li>Designsensory</li>
        <li>Morris Creative</li>
        <li>Robin Easter</li>
        <li>Pyxl</li>
        <li>Regal Cinemas</li>
        <li>Cadre5</li>
        <li>Cineworld</li>
      </ul>
    </section>
  </Styles>
);
export default Home;
