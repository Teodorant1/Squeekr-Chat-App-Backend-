import react, {component} from 'react';
import axios, { Axios } from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {bootstrap} from "bootstrap"
import {Button} from "bootstrap";
import React from 'react';
import {useState} from 'react';
import './App.css';



export default function SMS  ({styleprop}) 
{  
    const [currentmessages, setcurrentmessages]
     = useState
     ({"Name"    : "Names 1" ,
     "messages": 
     [{"Author" : "Author",
       "Text"   : "Text",
      "Size"    :  "size"}
   ]});

    const [contacts, getcontacts] 
    = useState([
       {"Name"    : "Names 1" ,
       "messages": 
       [{"Author" : "Author",
         "Text"   : "Text",
        "Size"    :  "size"}
     ]}
     ,{"Name"    : "Names 2",
     "messages": 
     [{"Author" : "Author",
       "Text"   : "Text",
      "Size"    :  "size"}
   ]},
   {"Name"    : "Names 3",
       "messages": 
       [{"Author" : "Author",
         "Text"   : "Text",
        "Size"    :  "size"}
     ]}
     ,
     {"Name"    : "Names 4",
       "messages": 
       [{"Author" : "Author",
         "Text"   : "Text",
        "Size"    :  "size"}
     ]}]);

function handleFilter ( contactname ) 
{ var newArray = contacts.filter(function (el) 
  {return el.Name == contactname;} )
 console.log(newArray);
 setcurrentmessages(newArray);
 console.log(currentmessages);
}

function ChatBox () {
    return <div id='chatbox'>
        <table className='table'>
           <thead>
            <tr> <th> <div class="p-3 mb-2 bg-dark text-white">Messages  </div> </th> </tr>
            </thead> 
            
            <tbody>
            {currentmessages.messages.map( message =>(   
      <tr key = {message.Size} >
      <td> <div class="p-3 mb-2 bg-dark text-white">{message.Author+" : " + message.Text} </div></td>
      </tr>))}
            </tbody>
              </table>
    </div>
}

function ContactMap (  ) 
{ return (<div id='smscontacts'>
<table  className='table'>
<thead><tr>
<th><div class="p-3 mb-2 bg-dark text-white">Contacts</div></th>
</tr>
</thead>

<tbody>

{contacts.map( contact =>(   
      <tr key = {contact.Name} >
      <td> <div class="p-3 mb-2 bg-dark text-white">{contact.Name} </div></td>
      <td>  <button 
      style={{color:"white" , backgroundColor: "red" }}
      onClick={()=>
        {
         handleFilter(contact.Name);
        }}     
      className="btn btn-danger btn-sm"> Upvote </button> </td>
      </tr>))}

</tbody>

</table>

</div>);   }

    return (<div style={{justifyContent: "center"}} ><div class="flex-container">
    <div><ContactMap/></div>
    <div><ChatBox/></div></div>
    </div>);  


}




