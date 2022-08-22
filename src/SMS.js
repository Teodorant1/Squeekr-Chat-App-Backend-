import react, {component} from 'react';
import axios, { Axios } from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {bootstrap} from "bootstrap"
import {Button} from "bootstrap";
import React from 'react';
import {useState} from 'react';



export default function SMS  ({styleprop}) 
{  
    const [currentContact, setcurrentcontact] = useState("placeholder 2");
    const [currentmessages, setcurrentmessages]
     = useState
     ([{"Author" : "placeholder" ,
        "Text"   : "placeholder"} ]);

    const [contacts, getcontacts] 
    = useState([
       {"name"    : "Names will go here",
       "messages": 
       [{"Author" : "placeholder" ,
         "Text"   : "placeholder"} ]  } 
          ]);

function ChatBox () {
    return <div>
        <table className='table'>
           <thead>
            <tr> <th> <div class="bg-light p-2 text-dark bg-opacity-75">Contacts  </div> </th> </tr>
            </thead> 
            <tbody>
            {contacts.map( contact =>(   
      <tr key = {contact.name} >
      <td> <div class="bg-light p-2 text-dark bg-opacity-75">{contact.name} </div></td>
      </tr>))}
            </tbody>
              </table>
    </div>
}

function ContactMap (  ) 
{ return (<div>
<table  className='table'>
<thead><tr>
<th><div class="bg-light p-2 text-dark bg-opacity-75">Contacts</div></th>
</tr>
</thead>

<tbody>

{contacts.map( contact =>(   
      <tr key = {contact.name} >
      <td> <div class="bg-light p-2 text-dark bg-opacity-75">{contact.name} </div></td>
      <td>  <button 
      style={{color:"white" , backgroundColor: "red" }}
      onClick={()=>{setcurrentcontact(player.name)}}     
      className="btn btn-danger btn-sm"> Upvote </button> </td>
      </tr>))}

</tbody>

</table>

</div>);   }

    return (<div><div class="flex-container">
     <div>Paloki</div>
    <div>Paloki</div></div>
    </div>);  


}




