import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Note from "./modules/note/Note"
const App: React.FC = () => {
  return (
    <Router>
      <Route exact={true} path="/" component={Note} />
    </Router>
  );
}

export default App;
