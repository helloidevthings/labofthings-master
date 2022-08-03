import styled from '@emotion/styled';

export default styled.main`
 --primary: var(${(props) => `--${props.currentColor}`});
 --secondary: var(${(props) => `--${props.currentColor}Secondary`});
 --tertiary: var(${(props) => `--${props.currentColor}Tertiary`});
 --tertLight: var(${(props) => `--${props.currentColor}TertLT`});
 --mainGradient: var(${(props) => `--${props.currentColor}Gradient`});

 --black: ${(props) => (props.currentColor === 'dark' ? '#fff' : '#000')};
 --white: ${(props) => (props.currentColor === 'dark' ? '#13131b' : '#fff')};
 --fuschia: #ff48ff;
 --blue: #55d2ff;
 --dark: #395cba;
 --gray: #acabb7;

 --fuschiaSecondary: #5c00d1;
 --blueSecondary: #1e1ec3;
 --darkSecondary: #fbbe5d;
 --graySecondary: #292838;

 --fuschiaTertiary: #b78dff;
 --blueTertiary: #76d4ff;
 --darkTertiary: #995200;
 --grayTertiary: #acabb7;

 --fuschiaTertLT: #f7bfff;
 --blueTertLT: #c6d6ff;
 --darkTertLT: #24243d;
 --grayTertLT: #e1e0ec;

 /* --fuschiaGradient: linear-gradient(45deg, #01016a, #7028d1, #ff93e3); */
 --blueGradient: linear-gradient(45deg, #3838b8, #2232f0, #55bcff);
 --darkGradient: linear-gradient(45deg, #000000, #2b2a37, #2f2f59);
 --grayGradient: linear-gradient(45deg, #1e1e1e, #292838, #555768);
 --fuschia: #ff48ff;
 --fuschiaGradient: linear-gradient(45deg, #01016a, #7028d1, #ff48ff);

 display: flex;
 min-width: 100vw;
 min-height: 100vh;
`;
