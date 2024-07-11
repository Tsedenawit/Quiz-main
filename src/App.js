import logo from './logo.svg';
import './App.css';
import Definite from './Definite';
import Congra from './Congra';
import { Route,BrowserRouter as Router, Routes, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Definite" ><Definite/></Route>
        <Route path="/congra" element={<Congra />} ></Route>
    </Switch>
    </Router>
    
  );
}

export default App;
