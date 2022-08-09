import logo from './logo.svg';
import './App.css';
import Navbars from './Navbar';
import Hero from './components/Hero';
import About from './components/About';
import { Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbars />
        <Routes>
          <Route path='/'  element={<Main/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>  
        <Footer/>   
    </div>
  );
}

export default App;
