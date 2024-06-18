import './App.css';
import ScrollSnapPage from './components/ScrollSnapPage';
import { BrowserRouter as Router } from "react-router-dom";
import Card from './components/Card';
import Mobile  from '../src/assets/images/Mobile';
import Web from '../src//assets/images/Web';
import REST from '../src/assets/images/REST';

function App() {

  return (
<Router basename={process.env.PUBLIC_URL}>
      <ScrollSnapPage className="App"/>
    </Router>
  );

}

export default App;
