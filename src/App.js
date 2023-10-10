import Homepage from './Homepage.js';
import AboutMe from './AboutMe.js';
import Contact from './Contact.js';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="Navbar">
        <Link to='/' className='Nav-item'>Homepage</Link>
        <Link to='/About me' className='Nav-item'>About Me</Link>
        <Link to='/Contact' className='Nav-item'>Contact Us</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='About me' element={<AboutMe/>}/>
        <Route path='Contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
};

export default App;
