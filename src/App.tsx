import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from './styles/global';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ContentSwitch from "./components/ContentSwitch"

const App: React.FC = () => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <ContentSwitch />
        </Router>
    </ThemeProvider>
      
    );
}

export default App;
