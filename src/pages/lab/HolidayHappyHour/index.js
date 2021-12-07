import Styles from './styled';
import React from 'react';

const HolidayHappyHour = () => {
  return (
    <Styles>
      <div className="columns fluid">
        <article className="title">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="snowflake"
          >
            <circle cx="19" cy="19" r="19" fill="white" />
          </svg>

          <h1 className="largest">Holiday Happy Hour</h1>
        </article>
        <article>
          <h2>HHH Dec 21st {'&'} 22nd HHH 🎄</h2>
          <p>
            Welcome, Happy Merry Festivities! This year we're planning on two
            different events to cater to our co-workers near and far!
          </p>
          <p>
            On Tuesday December 21st we'll have an all online party at 2:30pm.
          </p>
          <p>
            The Gift Exchange will take place after work hours at Token at 5pm.
            If you would like to join that portion of the party feel free to
            bring a gift. You can also hang out if you aren't feeling gifty. 😁{' '}
            <small>
              <em>Plenty of Games to Play!</em>
            </small>
          </p>
          <ul>
            <h3>TL;DR</h3>
            <li>Jackbox Games @2:30pm December 21st on Zoom</li>
            <li>Gift Exchange @5:00pm December 22nd @Token</li>
          </ul>
        </article>
        <article className="dark">
          <h1>Jackbox Party</h1>
          <ul>
            <h2>What is Jackbox Games?</h2>
            <li>
              <a href="https://www.jackboxgames.com/quiplash-two-interlashional/">
                This is Jackbox!
              </a>
            </li>
            <li>We'll play games like Quiplash or Fibbage</li>
          </ul>
          <ul>
            <h2>How does it work?</h2>
            <li>Someone starts a gameroom and up to 8 players can join</li>
            <li>
              Once the game is created each player can join on their phone or
              tablet
            </li>
            <li>
              <a href="https://www.jackboxgames.com/how-to-play/">
                Full Details on How it works
              </a>
            </li>
          </ul>
          <ul>
            <ul>
              <h2>Zoom Zoom!</h2>
              <li>Everyone can join remotely via Zoom</li>
              <li>
                <a href="https://us05web.zoom.us/j/88089635767?pwd=UGJjVE53Lzhmb1ljREhDUFNKU0tMdz09">
                  Here's the Link!
                </a>
              </li>
            </ul>
          </ul>
        </article>
        <article className="dark">
          <h1>Gift Exchange</h1>
          <ul>
            <h2>What To buy?</h2>
            <li>
              <a
                href={
                  'https://www.amazon.com/gcx/Gifts-for-Everyone/gfhz/?categoryId=adult-neutral&pd_rd_r=e1433dc5-64d3-484b-9b32-20dbc5219b7b&pd_rd_w=ttl2Y&pd_rd_wg=905Nn&pf_rd_p=cb374683-8108-4955-985d-d0a8feb2ef7c&pf_rd_r=WBQZ9D6QDQ32763YTQM7&pinnedAsins=B088X4XFNQ%2CB07F6RR2SK&priceTo=20&ref_=US_HOL21_P4_5_GW_Desk_DashQuad_GiftsByPrice_V2_ENES_20&scrollState=eyJpdGVtSW5kZXgiOjAsInNjcm9sbE9mZnNldCI6MTAxLjQ1MzEyNX0%3D&sectionManagerState=eyJzZWN0aW9uVHlwZUVuZEluZGV4Ijp7fX0%3D'
                }
                target="blank"
              >
                Ideas
              </a>
            </li>
          </ul>
          <ul>
            <h2>What {'&'} Where is Token?</h2>
            <li>Token is a barcade in West Knoxville</li>
            <li>They have arcade games, board games and pinball machines</li>
            <li>
              <a
                href={
                  'https://www.google.com/maps/place/Token+Game+Tavern/@35.9119309,-84.1005939,15z/data=!4m2!3m1!1s0x0:0x952536d67001ef6d?sa=X&ved=2ahUKEwik_YqB6NL0AhWczDgGHQKdDCoQ_BJ6BQiKARAF'
                }
                target="blank"
              >
                Token's Address
              </a>
            </li>
          </ul>
          <ul>
            <h2>Regular Rules</h2>
            <li>Pricing: $25 Limit</li>
            <li>Can't steal a gift you've already stolen</li>
            <li>Work Appropriate...</li>
          </ul>
          <ul>
            <h2>Epic Winners from Last Year</h2>
            <small>
              <em>
                Ok, it's not a competition but we all know there are winners...
              </em>
            </small>
            <li>That strange blanket with Shane's Face</li>
            <li>Bryan's Hand-maid Checkered Cutting Board</li>
            <li>Unicorn Water Bottle</li>
          </ul>
        </article>
      </div>
    </Styles>
  );
};

export default HolidayHappyHour;
