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
    const [currentContact, setcurrentcontact] = useState("placeholder 2");
    const [currentmessages, setcurrentmessages]
     = useState
     ([{"Author" : "Author" ,
        "Text"   : "Text",
        "Size"    :  "size"} ]);

    const [contacts, getcontacts] 
    = useState([
       {"Name"    : "Names will go here",
       "messages": 
       [{"Author" : "Author",
         "Text"   : "Text",
        "Size"    :  "size"}
     ]} 
          ]);

function handleFilter ( contactname ) 
{ const kontakts  = contacts;
  const filteredKontakts = kontakts.filter (value => { return value.Name != contactname} );

    setcurrentmessages(filteredKontakts);
    console.log("hooray");

}

function ChatBox () {
    return <div id='chatbox'>
        <table className='table'>
           <thead>
            <tr> <th> <div class="bg-light p-2 text-dark bg-opacity-75">Contacts  </div> </th> </tr>
            </thead> 
            <tbody>
            {currentmessages.map( message =>(   
      <tr key = {message.Size} >
      <td> <div class="bg-light p-2 text-dark bg-opacity-75">{message.Author} </div></td>
      <td> <div class="bg-light p-2 text-dark bg-opacity-75">{message.Text} </div></td>
      </tr>))}
            </tbody>
              </table>
    </div>
}

function ContactMap (  ) 
{ return (<div id='contactmap'>
<table  className='table'>
<thead><tr>
<th><div class="bg-light p-2 text-dark bg-opacity-75">Contacts</div></th>
</tr>
</thead>

<tbody>

{contacts.map( contact =>(   
      <tr key = {contact.Name} >
      <td> <div class="bg-light p-2 text-dark bg-opacity-75">{contact.Name} </div></td>
      <td>  <button 
      style={{color:"white" , backgroundColor: "red" }}
      onClick={()=>
        {setcurrentcontact(contact.Name);
         handleFilter(currentContact);
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




