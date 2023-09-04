import React from 'react';
import ReactDOM from 'react-dom/client';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { App } from './App';

const MainContainer = styled.main`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-image: ${(p) => p.theme.background};
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MainContainer>
        <App />
      </MainContainer>
    </ThemeProvider>
  </React.StrictMode>
);
