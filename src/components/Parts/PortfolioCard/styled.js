import styled from "@emotion/styled";

export default styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  li {
    margin: 1rem;
    a {
      text-decoration: none;
    }
  }
  figure {
    position: relative;
    width: 30px;
    height: 50px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
