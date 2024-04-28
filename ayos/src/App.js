import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return ( 
    <Router>
    <div className="App">
       <Navbar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/work" element={<Work />} />
          <Route path="/play" element={<Play />} /> */}
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      <header className="App-header">
      </header>
    </div>
    </Router>
  );
}

export default App;
