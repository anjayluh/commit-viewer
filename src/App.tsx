import './App.css';
import Layout from "./components/Layout"
const App: React.FC = () => {
  return (
    <Layout>
      <Router>
        <Route exact={true} path="/" component={Note} />
      </Router>
    </Layout>
  );
}

export default App;
