import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Project from "./pages/Projects"
import Contact from "./pages/Contact"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { createContext, useState } from 'react'

export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState()

  const toggleTheme = () => {
    setTheme((currTheme) => (currTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/projects' exact element={<Project />} />
            <Route path='/contact' exact element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
