import React from 'react';
import GlobalStyle from './styles/global';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ContentSwitch from "./components/ContentSwitch"
import { ToastProvider, useToasts } from 'react-toast-notifications';

const App: React.FC = () => {
    return (
      <React.Fragment>
        <GlobalStyle />
          <Router>
            <ToastProvider>
              <ContentSwitch />
            </ToastProvider>
          </Router>
      </React.Fragment>
      
      
    );
}

export default App;
