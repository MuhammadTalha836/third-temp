
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import Gallery from "./New/components/Gallery"
import NavBar from './New/components/NavBar';
import HomeSection from './New/components/HomeSection';
import Service from './New/components/Service';
import Bolg from './New/components/Bolg';
import About from './New/components/About';
import Contactus from './New/components/Contactus';
import Details from './New/components/Details';

function App() {

  //for page animations 
  const [windowDim, SetwindowDim] = useState({ width: window.innerWidth, Height: window.innerHeight });

  const detectSize = () => {
    SetwindowDim({ width: window.innerWidth, Height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.addEventListener('resize', detectSize)
    };
  }, [windowDim]);


  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  },);



  return (
    <div style={{ margin: "0", padding: "0" }}>
      <NavBar/>
      <HomeSection />
      <Service />
      <About/>
      <Details/>
      <Bolg />
      <Contactus/>
      {/* <Gallery /> */}
    </div>
  );
}

export default App;