import logo from './logo.svg';
import './App.css';
import Definite from './Definite';
import Congra from './Congra';
import { Route,BrowserRouter, Routes, } from 'react-router-dom';
function App() {
  return (
      <Routes>
        <Route path="/" element={<Definite/>}></Route>
        <Route path="/congra" element={<Congra />} ></Route>
    </Routes>
    
  );
}

export default App;
