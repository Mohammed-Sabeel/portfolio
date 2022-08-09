import React,{useEffect} from 'react'
import About from './About'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills';
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from './Contact';

const Main = () => {


  useEffect(() => {
    AOS.init({
      duration: 2000,
    
    });
  }, []);
  return (
    <div>
        
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Main