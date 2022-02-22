import React from 'react';
import Styles from './styled';

const Home = () => (
  <Styles>
    <main>
      <div className='title'>
        <h1>Hello I'm Joyanna</h1>
      </div>
    </main>
    <nav>
      <ul>
        <li>
          <a href='https://www.joyannahirst.com' target='blank'>
            Portfolio
          </a>
        </li>
        <li>
          <a href='/lab'>Dev Lab</a>
        </li>
        <li>
          <a href='/lab'>CSS Animations</a>
        </li>
      </ul>
    </nav>
  </Styles>
);
export default Home;
