import React from 'react'
import './App.css';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import {Link} from "react-router-dom"

const Menu =()=>{

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
    
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);
    
 

return(
    <>

    
<Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#010101",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.5,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 3,
              straight: true,
            },
            number: {
              density: {
                enable: false,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "square",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
       
        }}
      />
{
   <div >

      <a href="/scene1">
  <div className="buttonsp" id="button-6" style={{ position: "absolute", zIndex: "125",left:'0',top:'20%' }} >
           <div id="spin"></div>
           <a href="/scene1">Scene 1 </a>
         </div>
         </a>
        

         <a href="/scene2">
         <div className="buttonsp"   id="button-6" style={{ position: "absolute", zIndex: "125",left:'0',top:'35%' }} >
           <div id="spin"></div>
            <a href="/scene2">Scene 2 {`&`} 5  </a>
         </div>
         </a>

         <a href="/scene3">
         <div className="buttonsp" id="button-6" style={{ position: "absolute", zIndex: "125",left:'0',top:'50%' }} >
           <div id="spin"></div>
            <a href="#">Scene 3</a>
         </div>
         </a>
         
         <div className="buttonsp" id="button-6" style={{ position: "absolute", zIndex: "125",left:'0',top:'65%' }} >
           <div id="spin"></div>
            <a href="#">Scene 4 </a>
         </div>

    </div>
}
    </>
)
}

export default Menu;