import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Project from "./pages/Projects"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/projects' exact element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
