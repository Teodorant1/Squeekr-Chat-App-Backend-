
import { ReactComponent as SVGIcon2 } from "./icons/ChatFilled.svg";
import { ReactComponent as SVGIcon3 } from "./icons/DashboardFilled.svg";
import { ReactComponent as SVGIcon4 } from "./icons/logo.svg";
import { ReactComponent as SVGIcon6 } from "./icons/FaxFilled.svg";
import { ReactComponent as SVGIcon10 } from "./icons/SMSFilled.svg";
import { ReactComponent as SVGIcon1 } from "./icons/NotesFilled.svg";
import { ReactComponent as SVGIcon12 } from "./icons/VoicemailFilled.svg";
import { ReactComponent as SVGIcon13 } from "./icons/Dark-Chat.svg";
import { ReactComponent as SVGIcon14 } from "./icons/Dark-Dash.svg";
import { ReactComponent as SVGIcon15 } from "./icons/Dark-Fax.svg";
import { ReactComponent as SVGIcon16 } from "./icons/Dark-Notes.svg";
import { ReactComponent as SVGIcon17 } from "./icons/Dark-SMS.svg";
import { ReactComponent as SVGIcon19 } from "./icons/Dark-Voicemail.svg";


import "bootstrap/dist/css/bootstrap.min.css";
import {bootstrap} from "bootstrap"
import {Button} from "bootstrap";
import Toggle from "./Toggle";
import './App.css';
import React from 'react';
import { useState } from 'react';
import SMS from "./SMS";  


 

function App(props) {

  const [toggled, setToggled] = React.useState(false);
    const handleClick = () => {setToggled((s) => !s);};


  const [ipAddress1, setipAddress1] = useState('https://140.82.12.57:8001/'); 
  const [moon, setmoon] = useState('https://140.82.12.57:8001/'); 
  const [sun, setsun] = useState('https://140.82.12.57:8001/'); 

  const [value, setValue] = React.useState(false)
  const [page, setpage] = useState("dark");

  function Leftmenu (props) 
  { return <div style={{margin:0}} class="p-3 mb-2 bg-dark text-white" id='leftmenu' >
    
    <div>  {<SVGIcon4/>}   </div>
     <button style={{ width:190 , margin:5 }} type="button" className="btn btn-primary">{<SVGIcon14 />}  <div style={{justifycontent:"left"}} >   </div> Dashboard</button>
     <button style={{ width:190 , margin:5 }} type="button" className="btn btn-primary">{<SVGIcon13 />}  <div style={{justifycontent:"left"}} >   </div> Chat</button>
     <button style={{ width:190 , margin:5 }} type="button" className="btn btn-primary">{<SVGIcon17 />}  <div style={{justifycontent:"left"}} >   </div> SMS</button>
     <button style={{ width:190 , margin:5 }} type="button" className="btn btn-primary">{<SVGIcon19 />}  <div style={{justifycontent:"left"}} >   </div> Voicemail</button>
     <button style={{ width:190 , margin:5 }} type="button" className="btn btn-primary">{<SVGIcon15 />}  <div style={{justifycontent:"left"}} >   </div> Fax</button>
     <button style={{ width:190 , margin:5 }} type="button" className="btn btn-primary">{<SVGIcon16 />}  <div style={{justifycontent:"left"}} >   </div> Notes</button>
     <Toggle toggled={toggled} onClick={handleClick} />
    </div>}



  function LeftmenuLight ()
  {  { return <div style={{margin:0}} class="p-3 mb-2 bg-light text-dark" id='leftmenu' >
    
    
  <div>  {<SVGIcon4/>}   </div>
    
   <button style={{ width:190 , margin:5 }} type="button" className="btn btn-light">{<SVGIcon3 />}  <div style={{justifycontent:"left"}} >   </div> Dashboard</button>
   <button style={{ width:190 , margin:5 }} type="button" className="btn btn-light">{<SVGIcon2 />}  <div style={{justifycontent:"left"}} >   </div> Chat</button>
   <button style={{ width:190 , margin:5 }} type="button" className="btn btn-light">{<SVGIcon10 />}  <div style={{justifycontent:"left"}} >   </div> SMS</button>
   <button style={{ width:190 , margin:5 }} type="button" className="btn btn-light">{<SVGIcon12 />}  <div style={{justifycontent:"left"}} >   </div> Voicemail</button>
   <button style={{ width:190 , margin:5 }} type="button" className="btn btn-light">{<SVGIcon6 />}  <div style={{justifycontent:"left"}} >   </div> Fax</button>
   <button style={{ width:190 , margin:5 }} type="button" className="btn btn-light">{<SVGIcon1 />}  <div style={{justifycontent:"left"}} >   </div> Notes</button>
   <Toggle toggled={toggled} onClick={handleClick} />

   </div>}   }  



  function Display2 () { return <div> <Display1/></div>   }

   function Display1(  )


   {  if (toggled === true ){   return <div class="p-3 mb-2 bg-dark text-white flex-container"> 
  <div> <Leftmenu/> </div>  <div class="p-3 mb-2 bg-dark text-white"  id='centermenu' > 
  <div id="sms1" ><SMS/> </div>  </div> </div> } 
  else { return <div class="p-3 mb-2 bg-light text-dark flex-container"> 
  <div> <LeftmenuLight/> </div>  <div class="p-3 mb-2 bg-light text-dark"  id='centermenu' > <SMS/>  </div> </div>}}


  
  return (
    <div  id='main' class="p-3 mb-2 bg-light text-dark"  className="App">      
     <Display2/>   

     
    </div>
  )
}

export default App;
