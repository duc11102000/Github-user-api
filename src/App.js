import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./components/Login.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
