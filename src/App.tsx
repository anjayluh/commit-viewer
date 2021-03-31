import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ContentSwitch from "./components/ContentSwitch"

const App: React.FC = () => {
    return (
      <Router>
        <ContentSwitch />
      </Router>
    );
}

export default App;
