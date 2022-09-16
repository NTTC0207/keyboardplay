import React, { useEffect, useState } from 'react'
import './App.css';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import song1 from './static/song1.mp3'
import song2 from './static/Angry.mp3'
import dogbark from './static/dogbark.mp3'
import knock from './static/knockDoor.mp3'
import Lknock from './static/LoudKnock.mp3'
import guitar from  './static/bazz.mp3'
import angel from  './static/angel.mp3'
import applause from './static/applause.mp3'
import doorslam from './static/doorslam.mp3'
import bengkui from './static/崩溃.mp3'
import s1 from './static/s1.wav'
import s2 from './static/s2.wav'
import s3 from './static/s3.wav'
import s4 from './static/s4.wav'


const noNum = (text) => {
  return text.slice(0, -2)
}
const last = (text) => {
  return text.slice(-1)
}


console.log(song1)


var song = []
song[0] = new Audio()
song[1] = new Audio()
song[2] = new Audio()
song[3] = new Audio()
song[4] = new Audio()
song[5] = new Audio()


var repeat =[]
repeat[0] = new Audio()
repeat[1] = new Audio()
repeat[2] = new Audio()
repeat[3] = new Audio()
repeat[4] = new Audio()
repeat[5] = new Audio()
repeat[6] = new Audio()
repeat[7] = new Audio()


var name = ["Morning 1", "Angry 2", "Bark 3", "Guitar g","天使之音 q","aplause w"]

var repeat1 =["(r)Knock k", "(r)LoudKnock l","(r)doorslam e","(r)崩溃 r"]


const Scene2=()=> {
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
        setSel(e.key)
        setName(name[0])
        stopnum(e.key)

        song[0].src = song1;
        song[0].play()
     
        break;
      case "2":
        setSel(e.key)
        setName(name[1])
        stopnum(e.key)

        song[1].src = song2;
        song[1].play()
        break;
      case "3":
        setSel(e.key)
        setName(name[2])
        stopnum(e.key)

        song[2].src = dogbark;
        song[2].play()
        break;
      case "k":
        setRe(e.key)

        repeat[0].src = knock;
        repeat[0].play()
        break;
        case "r":
          setRe(e.key)

          repeat[3].src = bengkui;
          repeat[3].play()
          break;
      case "l":
        setRe(e.key)

        repeat[1].src = Lknock;
        repeat[1].play()
        break;
        case "g":
          setSel(e.key.toLowerCase())
          setName(name[3])
          stopnum(e.key)
  
          song[3].src = guitar;
          song[3].play()
          break;
          case "q":
            setSel(e.key.toLowerCase())
            setName(name[4])
            stopnum(e.key)
    
            song[4].src = angel;
            song[4].play()
            break;
            case "w":
              setSel(e.key.toLowerCase())
              setName(name[5])
              stopnum(e.key)
      
              song[5].src = applause;
              song[5].play()
              break;
              case "e":
                setRe(e.key)
        
                repeat[2].src = doorslam;
                repeat[2].play()
                break;
                case "7":
          setRe(e.key)

          repeat[4].src = s1;
          repeat[4].play()
          break;
          case "8":
            setRe(e.key)
  
            repeat[5].src = s2;
            repeat[5].play()
            break;
            case "9":
              setRe(e.key)
    
              repeat[6].src = s3;
              repeat[6].play()
              break;
              case "0":
                setRe(e.key)
      
                repeat[7].src = s4;
                repeat[7].play()
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
       
        }}/>


      <div style={{ position: "absolute", zIndex: "102", width: "100%", bottom: '10%', height: "500px" }}>

        {
          music === "" ? null : <div className="container"><span  style={{ color: "white", userSelect: "none" }}> {music === "Stop  " ?  `${music}`   : ` ${"Now Playing"} ${noNum(music)} `  }    </span></div>
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
<div className="s2" style={{ position: "absolute", zIndex: "125",left:"20%",top:'20%',height:"280px", color:"white" ,width:"1000px",textAlign:'justify', overflowY:"scroll"}}>
<div className={ hidet === true ? "hideme" : null    } >
<span style={{color:"red"}}>Press 1</span>
<p style={{color:"green"}}>Hao Yang is watering the plant</p>
<p>Hao Yang : omg! what is that smell, it smell so bad</p>
<span style={{color:"red"}}>Press 2</span>
<p>Hao Yang: This smell definitely comes from my neighbor's house, I cannot stand it anymore!I have to talk to him right now!</p>


<p style={{color:"green"}}>Jiamin is currently chatting with PY <span style={{color:"red"}}>Press K Then Press L</span></p>



<p>Jiamin: Hello neighbor,Hao Yang right, anything I can help?</p>

<p>Hao Yang: Dog poop…</p>

<p>Jiamin: huh ? dog poop?</p>

<p>Hao Yang: Trash….</p>

<p>Jiamin: Excuse me? You called me trash</p>

<p>Hao Yang: Leaves!</p>

<p>Jiamin: Leave? Seriously! This is my house</p>
<span style={{color:"red"}}>Press 2</span>
<p>Hao Yang : Do you know that your garden smells so bad? I can even smell it from my backyard, you know?  
Please do me a favor, clean your garden today or I will report it to the authorities.</p>
<p>Jiamin : Wow wow relax uncle.</p>

<p>Haoyang:  what, Uncle, are you kidding(face to audience, do I look like an uncle?)</p>

<p>Jiamin: Fine ,  uncle (hao yang staring) …. Mr ,   sorry for causing so much trouble to you.
 I've been busy joining my friend's graduation parties and  seldom at home recently(scene 1 supporting role).
  You must understand,I have four dogs and six cats, and two children. It is difficult for me to handle them at the same time</p>

<p>Hao Yang:  Do you know what the difference between ignorance and indifference?
? </p>

<p>Jiamin:  I don't know.</p>

<p>Hao Yang: I don't know either and i don't care, unless we settle this problem today or else i will take action. </p>

<p>Jiamin: Are you serious!</p>

<p>Hao Yang: I'm dead serious, this is your garden, so it is your responsibility to take care of it yourself.  
The smell makes me feel sick and already affects my daily life. </p>

<p>Jiamin: I know, as I told you, I have too many things to handle at the same time. Feeding animals and
Making dinner for my children</p>

<p>Hao Yang: If you fail to manage your own garden, you can just throw away your pet and send your children
 to an orphanage or hire a garden cleaner to clean it up for you.</p>

<p>Jiamin: Even if it's my problem you shouldn’t talk too much. Since you put it like this, could you do me a favor,
  help me pay for the service! </p>

<p>Hao  Yang: How can you be so shameless, it is your responsibility, be responsible for your own matters.</p>

<p>Jiamin: But i don’t think this is a problem, since you raised it ,would you mind cleaning the 
garden together with me.Just once, then when my husband returns, we shall clean it ourselves.</p>

<p>Hao Yang: What, I am asking you to clean it, but now you want me to help! Why should I do that? </p>

<p>Jiamin：How many times do you want me to repeat? Help me clean the garden if you want the smell to disappear or leave my house now. You got it? </p>

<p>Hao Yang: what if i don't want to leave</p>

<p>Jiamin: Dog, show hao yang the door </p>


  <span style={{color:"red"}}>Press 3</span>
<p>Hao yang： miss Aruna， help me</p>

<span style={{color:"red"}}>Press G</span>
<p style={{color:"green"}}>(Guitar noise) Peiying is practicing for the audition while Xiaowei resting at her house due to sick. Peiying keep making the guitar noise causing Xiaowei cannot take a rest and she gets mad.</p>
<p>Xw: Walao, who is that donkey, keep making noises, how can I sleep? Tsk. </p>
<p style={{color:"green"}}>Finally, there is no more noise, and Xiaowei almost fall asleep. (Guitar noise)  <span style={{color:"red"}}>Press G</span> </p>
<p style={{color:"green"}}>But suddenly she was wakened by the guitar noises again. </p>
<p>Xw: ahhhhh, I almost sleep!! </p>
<p style={{color:"green"}}>She is angry and hit the ceiling using a broom. </p>
<p>Py: whattt, earthquake mehh, but here is Malaysia lehh. Wait, seems like my downstair neighbor. Haiyaa I don’t care lahh. </p>
<p style={{color:"green"}}>She continues to practice her guitar. (Guitar noise) <span style={{color:"red"}}>Press G</span></p>
<p style={{color:"green"}}>They are having sound competition, which Peiying play harder and Xiaowei dedicated making various noises. (bang bang noise) </p>
<p style={{color:"green"}}>After a while, Xiaowei is tired, and she decided goes upstairs to argue with Peiying.</p>
<p>(knock)(big knock) <span style={{color:"red"}}>Press k then L</span></p>
<p>开门后：</p>
<p>Xw: U know u are playing this like a shit ahh? Even the dog can play better than you. (wk) </p>
<p>Py: What you know huh office lady? This is what we call art! Eh I forgot, u only know how to work, 365 days no one day off. Eyy, why are you here? This time you are supposed to be in front of the computer, right? </p>
<p>Xw: You think I don’t want to go back? Stay here I suffered, RIP my ears. </p>
<p>Py: oh, then you go to ur company lahh. (Door slam) <span style={{color:"red"}}>Press E</span></p>
<p>Peiying close the door. Xiaowei has no choice, and she gets back to her house. </p>
<p style={{color:"green"}}>Again, the guitar noise makes her to be more headache. </p>
<p>Xw: I should talk to her again. If not I no need to sleep alrdy.
(knock door) </p>
<p>Py: What again? </p>
<p>Xw: (angel sound effect)<span style={{color:"red"}}>Press Q</span>  ok listen, there is no point wasting our time to argue here. Let’s settle this. I am not feeling well today, and I need some rest. I hope you can understand. </p>
<p>Py: wahh, suddenly you've become so soft alrdy huh? Taken the wrong pil? </p>
<p>Xw: nolahh, just want to settle this and take a rest. </p>
<p>Py: how? </p>
<p>Xw: Let's compromise with each other. I will wear earplugs, and I hope you can get some things that can absorb the sound. By this, I can get enough, and quality rest and u can continue to practice. </p>
<p>Py: uhmm, sounds fair to us. But how? </p>
<p>Xw: uhm, use a fluffy carpet? Haiya, anything with a soft surface will do. Oh ya, btw I apologize for the rude attitude just now and I cannot deny that you play the guitar nicely. </p>
<p>Py: I apologize too for making noises and disturbing you to rest. </p>
<p style={{color:"green"}}>Peiying and Xiaowei finally settle the problem. </p>
<p> (phone ring) </p>
<p>Py: Hello, whats up bro, I cant wait for the audition, I am now practicing. </p>
<p>Someone: yo bro, u know what, the audition is today. </p>
<p>Py: what!!! (no!!!effect)<span style={{color:"red"}}>Press r</span> </p>


(haoyang 缠着 绷带(带点血) 进来)

<p>Hao Yang: Look what have you done to me!( 假装冲过去打 jiamin？？）</p>

 <p>Neighbor I: Calm down guys, both of you are neighbors right, as neighbors you should help each other. 
 Of course if you need some help next time, you can come here and find Jiamin(Neighbor D) help, right?</p>

<p>Jiamin: Ok sure, I will be glad if I can help you. </p>

<p>Haoyang: ok…. I’m actually free right now… I think I can help you, but only for this time,
next time you guys have to clean it regularly, I don't want to knock on your door again for the same problem.
…</p>

<p>Jiamin: thank you i appreciate for your help, lets clean it together, i'll show you the way</p>

（haoyang 装伤 ）
<p>Jiamin： Hey, stop pretending to be injured.</p>

<p>Haoyang: ouhh ok </p>

（whille cleaning…)
<p>Hao Yang: hey , i just want to apologies for my rudeness just now, and this is for you(丢狗大便)</p>

<p>The end </p>


</div>
</div>


    </div>
  );
}

export default Scene2;
