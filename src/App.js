import React from 'react';
import theme from './theme';
import { ThemeProvider } from '@emotion/react';
import AppStyles from './App.styled.js';
import GlobalStyles from './Global.styled.js';
import Router from './Router';
import Nav from './components/Nav';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppStyles>
        <div className="App">
          <header className="App-header"></header>
        </div>
        <Router />
      </AppStyles>
    </ThemeProvider>
  );
}

export default App;
