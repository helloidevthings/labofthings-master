import React from "react";
import Link from "next/link";
import Styles from "./styled";

const PortfolioCard = ({ details = [] }) => {
  return (
    <Styles>
      {details.map(({ name, path }) => (
        <li>
          <Link href={`portfolio${path}`}>
            <a>
              <figure>
                <img
                  src="https://res.cloudinary.com/cadre5images/image/upload/v1612201595/images/building-circle2.png"
                  alt=""
                />
              </figure>
              {name}
            </a>
          </Link>
        </li>
      ))}
    </Styles>
  );
};
export default PortfolioCard;
