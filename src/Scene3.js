import React, { useEffect, useState } from 'react'
import './App.css';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import bongo from './static/baby.gif'
import doorslam from './static/doorslam.mp3'
import babyCry from './static/babyCry.mp3'
import knock from './static/knockDoor.mp3'
import VaseBreaking from './static/VaseBreaking.mp3'
import tnj from './static/tnj.mp3'
import butterfly from './static/Butterfly.mp3'



const noNum = (text) => {
  return text.slice(0, -2)
}
const last = (text) => {
  return text.slice(-1)
}





var song = []
song[0] = new Audio()
song[1] = new Audio()


var repeat =[]
repeat[0] = new Audio()
repeat[1] = new Audio()
repeat[2] = new Audio()
repeat[3] = new Audio()


var name = ["TV noise 4","Butterfly 5"]

var repeat1=["(r)babyCry 1","(r)doorslam 2","(r)Vase Breaking 3","(r)Knock k"]

const Scene3=()=> {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const [music, setName] = useState("")
  const [hidet,setHide] = useState(true)
  const [sel, setSel] = useState("")
  const [re, setRe] = useState("")




  const Stopbgm = (key) => {

    for (let i = 0; i < song.length; i++) {

      if (key === "s")
        song[i].pause()
    }

  }

  const Stopbgm1 = (key) => {

    for (let i = 0; i < repeat.length; i++) {

      if (key === "a")
       
        repeat[i].pause()
    }

  }

  const stopnum = (key) => {
    for (let i = 0; i < name.length; i++) {
      if (key === last(name[i])) {

      } else {
        song[i].pause();
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', getKey, true)
  }, [])

  const getKey = (e) => {

    switch (e.key.toLowerCase()) {
      case "1":
        setRe(e.key)
       
        repeat[0].src = babyCry;
        repeat[0].play()
        break;
      case "2":
        setRe(e.key)
    
        repeat[1].src = doorslam;
        repeat[1].play()
        break;
        case "3":
          setRe(e.key)
         
    
            repeat[2].src = VaseBreaking;
            repeat[2].play()
            break;
            case "k":
              setRe(e.key)
         
    
              repeat[3].src = knock
              repeat[3].play()
              break;
         case "4":
            setSel(e.key)
            setName(name[0])
            stopnum(e.key)
           
    
            song[0].src = tnj;
            song[0].play()
            break;
            case "5":
              setSel(e.key)
              setName(name[1])
              stopnum(e.key)
            

              song[1].src = butterfly;
              song[1].play()
              break;
      case "s":
        setSel(e.key.toLowerCase())
        setName("Stop  ")
        Stopbgm(e.key)

        break;
        
        case "a":
          setRe(null)
         
          Stopbgm1(e.key)
          break;

        default: 


    }


  }

  const hide=()=>{
   if(hidet === true){
    return setHide(false)
   }else{
    return setHide(true)
   }
  }



  return (
    <div className="App" style={{ postion: "relative", width: "100%" }} >


      <div style={{ position: "absolute", zIndex: "123", width: "100%" }}>
        {
          name.map((item, index) => {
            return (
              <>
                <div className={sel === last(item) ? "buttonspAni" : "buttonsp"}       id="button-6" style={sel === last(item) ? { background: "#2D3142" } : null} >
                  <div id="spin"></div>
                  <a href="#">{item}  </a>
                 
                </div>
              </>
            )
          })
        }

      </div>

      <div style={{ position: "absolute", zIndex: "123", width: "100%",top:"8%" }}>
        {
          repeat1.map((item, index) => {
            return (
              <>
                <div className= {re === last(item)  ? "buttonre" : "buttonsp"}     id="button-6"  >
                  <div id="spin"></div>
                  <a href="#">{item}  </a>
                </div>
              </>
            )
          })
        }

      </div>
      




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
              value: 30,
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


      <div style={{ position: "absolute", zIndex: "102", width: "100%", bottom: '10%', height: "500px" }}>

        {
          music === "" ? null : <div className="container"><span  style={{ color: "white", userSelect: "none" }}> {music === "Stop  " ?  `${music}`   : ` ${"Now Playing"} ${noNum(music)}`  }    </span></div>
        }


      </div>


   




      {
  sel === "" ? null:  <div style={{ position: "absolute",left:"50%", zIndex: "123", bottom:'0' }}>
  
{/* <img src={bongo} style={{ position: "absolute", zIndex: "123",marginLeft:"50px" ,height: "384",bottom:'60px',display:music === "Stop  " ?  "none":null }} /> */}
  <div className="buttonsp" id="button-6" style={sel === "s" ? { background: "#2D3142" } : null} >
           <div id="spin"></div>
           <a href="#">Stop BGM s</a>
         </div>

    </div>
}

{
  <div style={{ position: "absolute", zIndex: "123",left:"37%",bottom:'0' }}>
     
  <div className="buttonsp" id="button-6"  style={re === "a" ? { background: "#2D3149" } : null}  >
           <div id="spin"></div>
           <a href="#">Stop repeat a</a>
         </div>

    </div>
}

    


{
   <div >
  
 
         <div onClick={hide} className="buttonsp" id="button-6" style={{ position: "absolute", zIndex: "125",right:'0',top:'50%' }} >
           <div id="spin"></div>
            <a href="#">{hidet === true ? "Show Script" : "Hide Script"} </a>
         </div>

    
    </div>
}


 {/* long script */}
<div className="s2" style={{ position: "absolute", zIndex: "125",left:"20%",top:'15%',height:"280px", color:"white" ,width:"1000px",textAlign:'justify', overflowY:"scroll"}}>
<div className={ hidet === true ? "hideme" : null    } >

<p style={{color:"green"}}>HT is watching TV (the volume is loud and the baby starts crying)</p>
<span style={{color:"red"}}>Press 4 then after 2 second 1 </span>
<p>HT = Uhh…can you two stop crying! Cry everyday, what do you all want from me! Huhh…
daddy also dont take care both of you, why he can go out relax and I should be here? I also
don't want to take care both of you!</p>
<p style={{color:"green"}}>HT feel annoy and start to throw thing</p>


<span style={{color:"red"}}>Press 3</span>
<p>WK = ahhhhhhhh, how come she can make loud noises like this everyday. I seriously cannot
withstand the noise anymore. I should go upstairs and hit her until she cannot make noise. No
no no, I should talk with her politely first.</p>

<p style={{color:"green"}}>WK goes upstairs and reach outside HT house. he hears HT still shouting at her babies （可能这
里可以放audio 比较小声 在门外听到baby 哭）<span style={{color:"red"}}>Press  1 audio low</span></p>

<span style={{color:"red"}}>Press  k</span>
<p>WK = scolding her baby again? Does she has empathy? WK knocks the door.<span style={{color:"red"}}>Press  k</span></p>

<p>WK = can you please shut up.</p>
<p>HT = what?</p>
<p>WK = no no no , hi i ' m your downstairs neighbour, Im Wei Kian.</p>
<p>HT = Hi, nice to meet you, any problem?</p>
<p>WK = do you know that you are freaking annoying? Oops sorry, do you know that you make a
lot of noise that affects my study.</p>
<p>HT = so? That's not my problem. Go back and continue your study dude. Do not come to trouble
me.</p>
<p style={{color:"green"}}>HT is ready to close the door</p>
<p style={{color:"green"}}>WK stop her</p>

<p>WK = Wait…we need to settle it today. Today’s work, today's end. You need to give me a
solution, if you dont do anything, I will take action.</p>

<p>HT = take action? What action can you take ? u are funny little kid </p>

<p>WK = I will report to the management if you keep making this kind of noise.</p>

<p>HT = ya ya ya , you go find the management.</p>

<p style={{color:"green"}}>HT is ready to close the door again</p>

<p style={{color:"green"}}>WK  stop her again</p>

<p>HT= 啧</p>

<p>WK = Wait…One last thing</p>

<p>HT= what?</p>

<p>WK = I think you also need to look for therapy since i can hear you are scolding at your baby
Baby starts crying. (audio play)<span style={{color:"red"}}>Press  1</span></p>

<p style={{color:"green"}}>HT feel annoy</p>

<p>HT = halo? I scold my baby, it’s none of your business. You think taking care of two babies is
easy? Huh… ohh yaaa, i forgot you are single, you dont have baby</p>

<p>WK= Hey, dont say like this ok?</p>

<p>HT = you feel offended? That's what I feel, then why do you ask me to take therapy?</p>

<p>WK = I just want you to be cured. <span style={{color:"red"}}>Press  1</span></p>



<p>HT = When do you want to end? You want me to scold you as
well isit. Har! Go back to your home or I will sweep you away (take a broom).</p>

<p style={{color:"green"}}>WK quickly run away and HT close the door hard <span style={{color:"red"}}>Press  2</span>
After WK goes back home he starts to think.</p>

<p>WK = why? Why? Why do I need to suffer this sin?</p>

<p style={{color:"green"}}>WK cry because he feel wronged,Suddenly WK laughing</p>

<p>WK = I should let her suffer this sin also. Waahahahahahha</p>

<p style={{color:"green"}}>WK start to make noise (Music volume up)<span style={{color:"red"}}>Press  5</span></p>

<p>HT = ??????</p>

<p>HT = haiz (抹着脸摇头说) ahhaha this dude, revenge me by the same method. It does not work
to me la hahahahha <span style={{color:"red"}}>Press  3</span></p>

<p>WK = what the hell ? she doesn't feel the noise and she makes more noise?? This woman is
crazy, crazy woman. I cannot play with her anymore.</p>

<p style={{color:"green"}}>WK go upstairs again and knock HT’s door<span style={{color:"red"}}>Press  k</span>,HT open the door see WK</p>

<p>HT = Hi, you again (笑笑)? What is your name already?</p>

<p style={{color:"green"}}>WK wants to tell her..</p>

<p>HT = Is okay, you dont need to tell me… What you want from me today?( 插手 笑着看WK)</p>
<p style={{color:"green"}}>Wk feel speechless and look at her</p>

<p>WK = Please, lower down the TV volume, stop dropping some things and stop scolding your
baby. Do not let them cry harder, please! Just stop it until I find a new accommodation.
WK raise up his white flag </p>

<p>HT = (哼笑) Do you think you can win me? I guess you have to wait 100 more years.
HAHHAHAHA.</p> 

<p style={{color:"green"}}>After 5 days</p>
<p style={{color:"green"}}>Ht open the door and saw wk is moving his furniture</p>

<p>HT = GoodBye! Kids, hahahahah, noob !</p>
<p style={{color:"green"}}>Wk feel helpless look to Ht</p>
<p style={{color:"green"}}>and then,Wk leave the apartment</p>
THE END



</div>
</div>


    </div>
  );
}

export default Scene3;
