import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Nail from './pages/nail';
import Lash from './pages/lash';

function App() {
  return (
    <div className="container">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nail" element={<Nail />} />
        <Route exact path="/lash" element={<Lash />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
