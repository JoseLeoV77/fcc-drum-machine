import { useState, useEffect } from "react"
import './App.css'

export function App(){
const [text, updateText] = useState("")
const drumPad = document.getElementsByClassName("drum-pad")
const audio = document.getElementsByClassName("clip")
const ids = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]
  
const handleClick = e =>{
  e.target.firstChild.play()
  updateText(e.target.firstChild.id)
}

const handleKeyDown = element =>{
  for(let i=0; i<9; i++){
    if(element.key.toUpperCase() == ids[i]){
      drumPad[i].firstChild.play()
      updateText(audio[i].id)
    }
  }
  
}
  
  useEffect(() => {
  document.addEventListener('keydown', handleKeyDown);
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  }}, []);

  return (
  <div id="wrapper">
    <h1 style={{color: "rgb(200,100,100)"}}>Drum App</h1>
  
    <main id="drum-machine">
      <section id="drum-wrapper">
  
        <div className="drum-pad" id="qSound" onClick={handleClick} >
          <audio id="Q" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" ></audio>
          Q
        </div>
  
        <div className="drum-pad" id="wSound" onClick={handleClick} onKeyDown={handleKeyDown} tabIndex="1">
          <audio id="W" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" ></audio>
          W
        </div>
  
        <div className="drum-pad" id="eSound" onClick={handleClick} onKeyDown={handleKeyDown} tabIndex="2">
          <audio id="E" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" ></audio>
          E
  
        </div>
  
        <div className="drum-pad" id="aSound" onClick={handleClick} onKeyDown={handleKeyDown} tabIndex="3">
          <audio id="A" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" ></audio> 
          A 
        </div>

        <div className="drum-pad" id="sSound" onClick={handleClick} onKeyDown={handleKeyDown} tabIndex="4">
          <audio id="S" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" ></audio>
          S
        </div>
  
        <div className="drum-pad" id="dSound" onClick={handleClick} onKeyDown={handleKeyDown} tabIndex="5">
          <audio id="D" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" ></audio>
          D
        </div>
  
        <div className="drum-pad" id="zSound" onClick={handleClick} onKeyDown={handleKeyDown} tabIndex="6">
          <audio id="Z" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" ></audio>
          Z
        </div>
  
        <div className="drum-pad" id="xSound" onClick={handleClick} onKeyDown={handleKeyDown} tabIndex="7">
          <audio id="X" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" ></audio>
          X
        </div>
  
        <div className="drum-pad" id="cSound" onClick={handleClick} onKeyDown={handleKeyDown} tabIndex="8">
          <audio id="C" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" ></audio>
          C
        </div>
      </section>
      <div id="display">{text}
      </div>
  </main>
 </div>
  )
}