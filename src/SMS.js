import react, { component, useLayoutEffect, useRef } from "react";
import axios, { Axios } from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "react-dom";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { BsFillTrashFill } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { RiArchiveDrawerLine } from "react-icons/ri";

export default function SMS({ props }) {
  const [show, setshow] = useState("invisible");
  const [xaxis, setxaxis] = useState(0);
  const [yaxis, setyaxis] = useState(0);

  const [username, setusername] = useState("paloki");
  const [Password, setPassword] = useState("paloki");
  const [apikey, setapikey] = useState("paloki");
  const [destonumber, setdestonumber] = useState("paloki");
  const [text, settext] = useState("paloki");
  const [phonenumber, setphonenumber] = useState("paloki");
  const [visiblestatus, setvisiblestatus] = useState("invisible");

  const [currentmessages, setcurrentmessages] = useState({
    Name: "Names 0",

    messages: [
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author0", Text: "Text0", Size: "size0" },
      { Author: "Author100", Text: "Text100", Size: "size100" },
    ],
  });

  const [rightclicktarget, setrightclicktarget] = useState("Names 0");

  const [contacts, getcontacts] = useState([
    {
      Name: "Names 1",
      messages: [{ Author: "Author1", Text: "Text1", Size: "size2" }],
    },
    {
      Name: "Names 2",
      messages: [{ Author: "Author2", Text: "Text2", Size: "size2" }],
    },
    {
      Name: "Names 3",
      messages: [{ Author: "Author3", Text: "Text3", Size: "size3" }],
    },
    {
      Name: "Names 4",
      messages: [{ Author: "Author4", Text: "Text4", Size: "size4" }],
    },
  ]);
  const messagesendref = useRef(null);
  const [endpoint1, setendpoint1] = useState("http://localhost:8001/getsms");
  const [endpoint2, setendpoint2] = useState("http://localhost:8002/sendsms");
  const [endpoint3, setendpoint3] = useState("http://localhost:8003/sms");
  const [cargo, setcargo] = useState({ method: "getcontacts", user: "john" });
  const [cargo2, setcargo2] = useState({ method: "getcontacts", user: "john" });
  const [cargo3, setcargo3] = useState({
    from: "666666666",
    to: "458967459867",
    text: "Its Clear Converse",
    media: "paloki",
    segments: 2,
    type: "SMS",
  });

  // useEffect(() => {
  //  messagesendref.current?.scrollintoView();
  // }, [currentmessages]);

  function sendmessage(event) {
    //  event.preventDefault();

    const parcela1 =
      "{ method:" +
      cargo.method +
      ",  user:" +
      cargo.user +
      ",Paloki:" +
      cargo.user +
      "}";
    const parcela2 = JSON.stringify(cargo3);
    const parcela3 =
      "{ from:aquiznos" +
      cargo3.from +
      ", to:aquiznos" +
      cargo3.to +
      ", text:" +
      cargo3.text +
      "}";

    axios
      .post(endpoint2, parcela3)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    const handleClick = () => setshow("invisible");
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  async function handlesetCredentials(event) {
    const zusername = document.getElementById("username").value;
    const zpassword = document.getElementById("Password").value;
    const zapikey = document.getElementById("apikey").value;

    const zphonenumber = document.getElementById("phonenumber").value;
    // 5595001708
    const zdestonumber = document.getElementById("destonumber").value;
    const ztext = document.getElementById("text").value;
    setusername(zusername);
    setPassword(zpassword);
    setapikey(zapikey);

    setphonenumber(zphonenumber);
    setdestonumber(zdestonumber);
    settext(ztext);
  }

  function handleFilter(contactname) {
    var newArray = contacts.filter(function (el) {
      return el.Name == contactname;
    });
    console.log(newArray);
    setcurrentmessages(newArray[0]);
    console.log(currentmessages);
  }

  function LoginInfo() {
    return (
      <div>
        {" "}
        <div class="flex-container">
          <div>
            <label htmlFor="username">
              <h1>username</h1>
            </label>

            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="username"
            />
          </div>

          <div class="form-group">
            <label htmlFor="Password">
              <h1>Password</h1>
            </label>
            <input
              type="password"
              className="form-control"
              id="Password"
              placeholder="Password"
            />
          </div>

          <div class="form-group">
            <label htmlFor="apikey">
              <h1>api key</h1>
            </label>
            <input
              type="password"
              className="form-control"
              id="apikey"
              placeholder="apikey"
            />
          </div>
        </div>
        <div class="flex-container">
          {" "}
          <div class="form-group">
            <label htmlFor="phonenumber">
              <h1>phonenumber</h1>
            </label>
            <input
              type="text"
              className="form-control"
              id="phonenumber"
              placeholder="phonenumber"
            />
          </div>
          <div class="form-group">
            <label htmlFor="destonumber">
              <h1>destonumber</h1>
            </label>
            <input
              type="text"
              className="form-control"
              id="destonumber"
              placeholder="destonumber"
            />
          </div>
          <div class="form-group">
            <label htmlFor="text">
              <h1>text</h1>
            </label>
            <input
              type="text"
              className="form-control"
              id="text"
              placeholder="text"
            />
          </div>{" "}
        </div>
        <button
          onClick={() => {
            handlesetCredentials();
          }}
          type="submit"
          style={{
            backgroundColor: "#00b1f0",
            color: "white",
            height: "55px",
            width: "150px",
          }}
        >
          Set Credentials
        </button>
        <button
          onClick={() => {
            const element = document.getElementById("theend");

            element.scrollIntoView();
          }}
          type="submit"
          style={{
            backgroundColor: "#00b1f0",
            color: "white",
            height: "55px",
            width: "150px",
          }}
        >
          SEND SMS
        </button>
      </div>
      //buttons go up here
    );
  }

  function ChatBox() {
    return (
      <div id="chatbox">
        <LoginInfo />
        <table className="table">
          <thead>
            <tr>
              {" "}
              <th>
                {" "}
                <div>SMS MESSAGES FROM:{" " + currentmessages.Name} </div>{" "}
              </th>{" "}
            </tr>
          </thead>

          <tbody>
            {currentmessages.messages.map((message) => (
              <tr key={message.Size}>
                <td>
                  {" "}
                  <div class="p-3 mb-2 bg-dark text-white">
                    {message.Author + " : " + message.Text}{" "}
                  </div>
                </td>
              </tr>
            ))}

            <div id="theend" ref={messagesendref} />
          </tbody>
        </table>
      </div>
    );
  }

  function togglecontacts() {
    if (visiblestatus === "visible") {
      setvisiblestatus("invisible");
    } else if (visiblestatus === "invisible") {
      setvisiblestatus("visible");
    }
  }

  function Contactlist() {
    const listitems = contacts.map((contact) => (
      <div key={contact.Name}>
        {" "}
        <div class="flex-container">
          {" "}
          <button
            style={{
              backgroundColor: "#9dd045",
              color: "white",
              height: "55px",
              width: "150px",
            }}
            onContextMenu={(event) => {
              event.preventDefault();

              sendmessage();

              var newtarget = contact.Name;
              setrightclicktarget(newtarget);
              setshow("visible");
              setyaxis(event.pageY - 60);
              setxaxis(event.pageX);
            }}
            onClick={() => {
              handleFilter(contact.Name);
            }}
          >
            {" "}
            {contact.Name}{" "}
          </button>
        </div>
      </div>
    ));
    return <div>{listitems}</div>;
  }

  function ContactMap() {
    return (
      <div id="contactlist" class={visiblestatus}>
        <div>
          {" "}
          <Contactlist />{" "}
        </div>
      </div>
    );
  }

  function Buttonpluscontact() {
    return (
      <div>
        <button
          onClick={() => {
            togglecontacts();
          }}
          type="submit"
          style={{
            backgroundColor: "#9dd045",
            color: "white",
          }}
        >
          HIDE/SHOW CONTACTS
        </button>

        <div class="invisible"> This is invisible </div>

        <ContactMap />
      </div>
    );
  }

  function Rightclickmenu() {
    return (
      <div
        class={show}
        style={{
          position: "absolute",
          top: yaxis,
          left: xaxis,
          zIndex: 10,
        }}
      >
        <div class="p-3 mb-2 bg-secondary text-white">
          <div> {rightclicktarget} </div>
          <div>
            {" "}
            <button
              style={{
                backgroundColor: "#00b1f0",
                color: "white",
                height: "55px",
                width: "150px",
              }}
              onClick={() => {
                setshow("invisible");
              }}
            >
              {" "}
              ADD CONTACT
              <IoMdContacts />{" "}
            </button>
          </div>
          <div>
            {" "}
            <button
              style={{
                backgroundColor: "#9dd045",
                color: "white",
                height: "55px",
                width: "150px",
              }}
              onClick={() => {
                setshow("invisible");
              }}
            >
              {" "}
              ARCHIVE
              <RiArchiveDrawerLine />
            </button>
          </div>
          <div>
            {" "}
            <button
              style={{
                color: "white",
                backgroundColor: "red",

                height: "55px",
                width: "150px",
              }}
              onClick={() => {
                setshow("invisible");
              }}
            >
              DELETE CONTACT
              <BsFillTrashFill />{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="smspage">
      <div class="flex-container">
        <Buttonpluscontact />
        <div>
          <ChatBox />
        </div>
        <div>
          <Rightclickmenu />
        </div>
      </div>
    </div>
  );
}
