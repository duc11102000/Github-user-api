import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./components/Login.js";

function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
