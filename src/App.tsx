import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from './styles/global';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ContentSwitch from "./components/ContentSwitch"
import { ToastProvider, useToasts } from 'react-toast-notifications';

const App: React.FC = () => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <ToastProvider>
            <ContentSwitch />
          </ToastProvider>
        </Router>
    </ThemeProvider>
      
    );
}

export default App;
