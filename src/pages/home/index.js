import React from 'react';
import Styles from './styled';

const Home = () => (
  <Styles>
    <main>
      <header>
        <div className='title'>
          <h1>Hello</h1>
          <h2>I'm Joyanna</h2>
        </div>
        <nav>
          <a href='https://www.joyannahirst.com' target='blank'>
            Portfolio
          </a>
          <a href='/lab'>Dev Lab</a>
          <a href='/css-animations'>CSS Animations</a>
        </nav>
      </header>
      <article>
        <figure>
          <img
            src='https://res.cloudinary.com/labofthingsimages/image/upload/v1645496037/20201227_174511_hcwxly.jpg'
            alt='Joyanna with a hat and jean jacket'
          />
        </figure>
      </article>
    </main>
  </Styles>
);
export default Home;
