import logo from "./logo.svg";
import "./App.css";
import Definite from "./Definite";
import Congra from "./Congra";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Definite />}></Route>
        <Route path="/congra" element={<Congra />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
