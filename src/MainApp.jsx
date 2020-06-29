import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Posts from './components/Posts';
import Footer from './components/Footer';

const MainApp = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },2000)
    })
    return ( 
        <>
        {loading && (
        <div id="loader" class="loader-container">
      <div class="flex">
        <div class="loader"></div>
      </div>
      <div class="load-text">
        Cargando...
      </div>
    </div>
        )}
        <Header />
        <div className="separator"></div>
        <About />
        <Experience />
        <Skills />
        <Certificates />
        <Projects />
        <Posts />
        <Footer />
        </>
     );
}
 
export default MainApp;