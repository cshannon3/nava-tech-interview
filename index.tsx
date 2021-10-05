import React from 'react';
import { render } from 'react-dom';
import { theme, CSSGlobal } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import HomePage from './containers/home_page';
import './styles/styles.css';


import uuid from 'react-uuid'

function App() {
  console.log(uuid());
  return (
    <CSSGlobal>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <HomePage />
        </ModalProvider>
      </ThemeProvider>
    </CSSGlobal>
  );
}

render(<App />, document.getElementById('root'));
