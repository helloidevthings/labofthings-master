import Styles from './styled';
import React from 'react';

const HolidayHappyHour1 = () => {
  const Falala = [
    { item: 'fa' },
    { item: 'la' },
    { item: 'la' },
    { item: 'la' },
    { item: 'la' },
    { item: 'la' },
    { item: 'la' },
  ];

  return (
    <Styles>
      <div className="columns fluid">
        <article className="title">
          {Falala.map(({ item }, i) => (
            <div
              className="snowflakeWrap"
              style={{
                transform: `translateX(${20 * i}%)`,
              }}
            >
              <h2>{item}</h2>
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="snowflake itemTo bounce1"
                style={{
                  animationDelay: `${1 * i}s`,
                }}
                key={i}
              >
                <circle cx="19" cy="19" r="19" fill="white" />
              </svg>
            </div>
          ))}
          <h1 className="largest">Holiday Happy Hour</h1>
        </article>
        <article>
          <h2>HHH Dec 21st 🎄</h2>
          <p>
            Welcome, Happy Merry Festivities! This year we're planning a Holiday
            event for our team members near and far! 🎁
          </p>
          <p>
            On Tuesday December 21st we'll have an all online party at 2:30pm.
            This will be a Zoom meeting and we'll play online games from
            Jackbox. 📲
          </p>
          <ul>
            <h3>TL;DR</h3>
            <li>Online Party @2:30pm December 21st on Zoom</li>
          </ul>
        </article>
        <article>
          <h1>Jackbox Party</h1>
          <ul>
            <h2>What is Jackbox Games?</h2>
            <li>
              <a
                href="https://www.jackboxgames.com/quiplash-two-interlashional/"
                target="blank"
              >
                This is Jackbox!
              </a>
            </li>
            <li>We'll play games like Quiplash or Fibbage</li>
          </ul>
          <ul>
            <h2>How does it work?</h2>
            <li>One player starts a gameroom and up to 8 players can join</li>
            <li>
              Once the game is created each player can join on their phone or
              tablet
            </li>
            <li>
              <a
                href="https://www.jackboxgames.com/how-to-play/"
                target="blank"
              >
                Full Details on How it works
              </a>
            </li>
          </ul>
          <ul>
            <ul>
              <h2>Zoom Zoom!</h2>
              <li>Everyone can join remotely via Zoom</li>
              <li>
                <a
                  href="https://us05web.zoom.us/j/81828959242?pwd=VFBJN1U5REZjd2VFR21WOThHUjgzUT09"
                  target="blank"
                >
                  Here's the Link!
                </a>
              </li>
            </ul>
          </ul>
        </article>
        <article className="center">
          <h2>See you There!</h2>
          <p>🎅</p>
        </article>
      </div>
    </Styles>
  );
};

export default HolidayHappyHour1;
