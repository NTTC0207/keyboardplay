import React, { useEffect, useState } from 'react'
import './App.css';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import DoorBell from "./static/doorbell.mp3"
import Party1 from './static/Party1.mp3'
import Party2 from './static/Party2.mp3'
import Lknock from './static/LoudKnock.mp3'
import Animal from './static/Animal.mp3'
import Censor from './static/Censor.mp3'

import Countdown from 'react-countdown';


const noNum = (text) => {
  return text.slice(0, -2)
}
const last = (text) => {
  return text.slice(-1)
}


var song1 = []
song1[0] = new Audio()
song1[1] = new Audio()
song1[2] = new Audio()


var repeat =[]
repeat[0] = new Audio()
repeat[1] = new Audio()
repeat[2] = new Audio()


var name = [ "Dance 2", "Marshmallow 3","Animal 4"]
var repeat1= ["(r)DoorBell 1", "(r)LoudKnock l","(r)Censor c"]

const Scene1=()=> {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const [music, setName] = useState("")
  const [music2, setRepeat] = useState("")
  const [hidet,setHide] = useState(true)
  const [sel, setSel] = useState("")
  const [re, setRe] = useState("")



  const Stopbgm = (key) => {

    for (let i = 0; i < song1.length; i++) {

      if (key === "s")
        song1[i].pause()
    
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
        song1[i].pause();
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

        repeat[0].src = DoorBell;
        repeat[0].play()
        break;
      case "2":
        setSel(e.key)
        setName(name[0])
        stopnum(e.key)

        song1[0].src = Party1;
        song1[0].play()
        break;
      case "3":
        setSel(e.key)
        setName(name[1])
        stopnum(e.key)

        song1[1].src = Party2;
        song1[1].play()
        break;
        case "4":
          setSel(e.key)
          setName(name[2])
          stopnum(e.key)
  
          song1[2].src =Animal;
          song1[2].play()
          break;
      case "l":
        setRe(e.key)

        repeat[1].src = Lknock;
        repeat[1].play()
        break;
        case "c":
          setRe(e.key)
          repeat[2].src = Censor;
          repeat[2].play()
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

  const hideGif=()=>{

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
                <div className= {re === last(item) ? "buttonre" : "buttonsp"}    id="button-6"  >
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
          music === "" ? null : <div className="container"><p style={{ color: "white", userSelect: "none" }}> {music === "Stop  " ?  `${music}`   : ` ${"Now Playing"} ${noNum(music)} `  }    </p></div>
        }


      </div>





{
  sel === "" ? null:  <div onClick={hideGif} style={{ position: "absolute",left:"50%", zIndex: "123", bottom:'0' }}>
      {/* {sel === "2" || sel==="3" ? <img src={bongo} style={{ position: "absolute", zIndex: "123", width: "490",height: "384",bottom:'60px',left:"33%",display:music === "Stop  " ?  "none":null  }} />:null } */}

  <div className="buttonsp" id="button-6" style={sel === "s" ? { background: "#2D3142" } : null} >
           <div id="spin"></div>
           <a href="#">Stop bgm s</a>
         </div>

    </div>
}


{
  <div style={{ position: "absolute", zIndex: "123",left:"37%",bottom:'0' }}>
     
  <div className="buttonsp" id="button-6"  >
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
<div className="s2" style={{ position: "absolute", zIndex: "125",left:"20%",top:'18%',height:"290px", color:"white" ,width:"1000px",textAlign:'justify', overflowY:"scroll"}}>
<div className={ hidet === true ? "hideme" : null    } >
<span style={{color:"red"}}>Press 2 or 4</span>
<p style={{color:"green"}}>It is 2am midnight, Uncle Wong is woken up by the musics from his neighbour.</p>

<p>Uncle Wong: What time is it? 2am??! Walao it is already midnight, why the neighbour is still making so many noises? (Music is still playing non-stop) </p>
<p>Uncle Wong: How to sleep like that wei? Tomorrow I still have a trip with my friends… Cannot tahan already, I really need to scold this neighbour gao. </p>

<p style={{color:"green"}}>Uncle Wong has no choice but to go out to his neighbour’s house to complain about the blasting and noisy music. </p>

<span style={{color:"red"}}>Press  3</span>
<p style={{color:"green"}}>Meanwhile at Cheng Han’s house, Cheng Han is celebrating his university graduation happily with his friends. </p>

<p>Cheng Han: Cheers~ happy graduation!!</p>
<p>Friend1: Happy graduation!! All of us should keep in touch even after we graduated, our bond is unbreakable. </p>
<p>Cheng Han: Ya, by the way, what is your plan after this. </p>
<p>Friend1: I have got a job as a web developer in KL. How about you? </p>
<p>Friend2: Actually, I failed my interpersonal communication last sem, so… I still cannot graduate yet…</p>
<p>Cheng Han and friend1: ok… (forced-smiling) </p>

<p style={{color:"green"}}>Uncle Wong has arrived in front of Cheng Han’s house, and he rings the doorbell </p>
<p>(Doorbell sound keeps ringing) <span style={{color:"red"}}>Press 1</span></p>
<p>Cheng Han: Haiya, it is around 2 am already, who is ringing the doorbell?? Must be T and J express, I remember I did purchase an Iphone 13 a few weeks ago, I will go and grab my parcel. </p>
<p style={{color:"green"}}>Cheng Han opens the door</p>
<p>Cheng Han: hey, where is my iphone, faster give me my parcel, I am really busy right now. </p>
<p>Uncle Wong: What parcel you mean?? I don’t have any parcel with me. </p>
<p>Cheng Han: What? Last time I ordered for a television then I received a remote control and now the whole parcel has gone missing?? Later, I confirm share insta story to my friends. </p>
<p>Uncle Wong: I think you must have misunderstood something; I am not here to send your parcel… I am your neighbour, I am here because you are making noises. </p>
<p>Cheng Han: Aiyo uncle, it is already midnight, u should go to sleep, don’t be such a busybody, I have no time to deal with you. </p>
<p>Uncle Wong: You are being so disrespectful, you little kid, the reason I can’t sleep is because of the music that you play, it is too loud and I can’t sleep well. </p>
<p>Cheng Han: oic… nevermind, I have a good idea, wait for me ya…</p>

<p style={{color:"green"}}>Cheng Han go inside his house and grab Uncle Wong a can of beer. </p>
<p>Cheng Han: nah, you can have it. </p>
<p >Uncle Wong:why are you giving me a can of beer?? </p>
<p>Cheng Han: ooo last time when I can’t sleep well, I will drink it. After drinking, confirm can sleep until the next morning~</p>
<p>Uncle Wong: Haizz… Stop joking around young boy, I am just here to ask you to lower down the volume…</p>
<p>Cheng Han: Lower down the volume?? No way! Uncle. All of us are having fun right now, don’t spoil the atmosphere la. </p>
<p>Uncle Wong: Then, how am I going to sleep?? Tomorrow I have to wake up early, I need you to lower down the volume else I am not leaving. </p>
<p>Cheng Han: Oi, uncle I am trying to be a nice person, you better don’t test my patience. This is my farewell party with my friends, there is no way that I will let you to spoil the party. </p>
<p>Uncle Wong: Seriously? I am just asking you to lower down the volume. </p>
<p>Cheng Han: Enough talking, I have no time for you, my father is one of the member in the parliament, I guarantee you that you will receive a charge soon. </p>
<p>Uncle Wong: Calm down, young boy… there is no need for you to be so rude… Why don’t we settle this problem in a peaceful way?? You turn down the volume and I will leave, it is just a small matter. </p>
<p>Cheng Han: This is our farewell party, I can’t let my friends down! </p>
<p>Uncle Wong: By the way, you are also being disrespectful to the other neighbours. I am pretty sure you will receive more complaints if you insist not to lower down the volume. </p>
<p>Cheng Han: Haizzz… ok ok I will listen your advice, now just leave…</p>
<span style={{color:"red"}}>Press 3</span>
<p>Cheng Han: Haizz… finally the famous DJ- Marshmello is coming to my party… what a waste…</p>
<p>Uncle Wong: What?? Marshmello is playing musics in your house??! I am one of his big fan too! </p>
<p>Cheng Han: Uncle, really arh??? Why don’t you join us and enjoy the party whole night???
Uncle Wong: Fuiyoh~~ Yeah, I would like to! </p>

<p style={{color:"green"}}>At the end Cheng Han and Uncle Wong enjoy the party whole night and Uncle Wong totally forget about his trip. </p>
<p style={{color:"green"}}>The next day, uncle wong friend call him but he doesnt respond</p>
<p>Friend1: walao, this Hung Tik… Always fang fei gei, he is the one who invite us for the trip what… </p>



</div>
</div>







    </div>
  );
}

export default Scene1;
