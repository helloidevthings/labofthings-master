import styled from '@emotion/styled';

export default styled.div`
 position: absolute;
 width: ${(props) => props.width + 4}px;
 height: 100%;
 top: 0;
 left: 0;
 border-radius: 4rem;
 transform: translateX(${(props) => props.positionX - 2}px);
 background: linear-gradient(45deg, black, #888888);
 box-shadow: 0 0 7px 2px #a8a8a8;
 z-index: -1;
 transition: transform 0.4s cubic-bezier(1, -0.35, 0.4, 1.19);
`;
