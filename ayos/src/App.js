import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Play from './pages/Play';
import Resume from './pages/Resume';
function App() {
  return ( 
    <Router>
    <div className="App">
       <Navbar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          {/* <Route path="/Work/Resume" element={<Resume />} />  */}
      
          <Route path="/Contact" element={<Contact />} />
              {/* <Route path="/Play/" element={<Play />} /> */}
        </Routes>
      <header className="App-header">
      </header>
    </div>
    </Router>
  );
}

export default App;
