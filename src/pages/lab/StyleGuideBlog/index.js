import Styles from './styled';
import React from 'react';

const StyleGuideBlog = () => {
  return (
    <Styles>
      <div className='blog'>
        <article>
          <h2>This is a Blog Header</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <figure className='full-width'>
            <img
              src='https://res.cloudinary.com/labofthingsimages/image/upload/v1643735163/movie-theater-popcorn-placeholder_xfdyvx.jpg'
              alt=''
            />
          </figure>
        </article>
      </div>
    </Styles>
  );
};

export default StyleGuideBlog;
