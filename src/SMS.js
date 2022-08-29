import react, { component, useLayoutEffect } from "react";
import axios, { Axios } from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "react-dom";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import { useState } from "react";
import "./App.css";
import { BsFillTrashFill } from "react-icons/bs";
import * as base64 from "base-64";
import * as utf8 from "utf8";

export default function SMS({ props }) {
  const [ipAddress0, setipAddress0] = useState(
    "https://api2.questblue.com/smsv2"
  );

  const [ipAddress1, setipAddress1] = useState(
    "https://teodorantinsanitytopicsimulator.com:4444/"
  );
  const [username, setusername] = useState("paloki");
  const [Password, setPassword] = useState("paloki");
  const [apikey, setapikey] = useState("paloki");
  const [destonumber, setdestonumber] = useState("paloki");
  const [text, settext] = useState("paloki");
  const [phonenumber, setphonenumber] = useState("paloki");
  const [visiblestatus, setvisiblestatus] = useState("invisible");
  const [headers, setheaders] = useState(
    "Content-type: application/json",
    "Security-Key: apikey"
  );

  const [currentmessages, setcurrentmessages] = useState({
    Name: "Names 0",

    messages: [{ Author: "Author0", Text: "Text0", Size: "size0" }],
  });

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
  // curl -i -u <api_username>:<api_password> -H "Content-type: application/json"
  // -H "Security-Key: <your_private_key>" -XPOST https://api2.questblue.com/smsv2 -d
  //"{\"did\":\"11122233333\",\"did_to\":[\"2223334444\"],\"msg\":\"test\",\"file_url\":
  // ['https://somepicture.com/image.png']}"

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

    setheaders("Content-type: application/json", "Security-Key:" + apikey);

    setphonenumber(zphonenumber);
    setdestonumber(zdestonumber);
    settext(ztext);
  }

  function handlesendsms2() {
    var md5 = require("md5");
    console.log(md5("message"));
    console.log(base64.encode(utf8.encode("foo © bar 𝌆 baz")));
    var userpass = base64.encode(
      utf8.encode({ username } + ":" + { Password })
    );
    var keyip = md5({ apikey } + "198.0.237.9");

    var data = JSON.stringify({
      did: "5595001708",
      did_to: "5594716064",
      msg: "test",
    });

    var config = {
      method: "post",
      //url: "https://clearconverse.io:4444",
      url: "https://api2.questblue.com/smsv2",
      headers: {
        "Security-Key": keyip,
        Authorization: "Basic" + userpass,
        "Content-Type": "application/json",
        // ,"User-Agent": "QB API v.2",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // fetch('https://api2.questblue.com/smsv2', {
  //  method: 'POST',
  //  headers: {
  //      'Content-type': 'application/json',
  //     'Security-Key': 'your_private_key',
  //    'Authorization': 'Basic ' + btoa('username:password')
  //  },
  // body: '{"did":"11122233333","did_to":["2223334444"],"msg":"test","file_url": [\'https://somepicture.com/image.png\']}'
  //  });
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
          class="btn btn-primary"
        >
          Set Credentials
        </button>
        <button
          onClick={() => {
            handlesendsms2();
          }}
          type="submit"
          class="btn btn-primary"
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
                <div class="p-3 mb-2 bg-dark text-white">
                  SMS MESSAGES FROM:{" " + currentmessages.Name}{" "}
                </div>{" "}
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
            class="p-3 mb-2 bg-success text-white"
            onClick={() => {
              handleFilter(contact.Name);
            }}
          >
            {" "}
            {contact.Name}{" "}
          </button>{" "}
          <div class="dropdown">
            <button
              class="p-3 mb-2 bg-primary btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Options
            </button>
            <ul
              class="p-3 mb-2 bg-dark text-white dropdown-menu"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <button
                  style={{
                    backgroundColor: "#00b1f0",
                    color: "white",
                    height: "55px",
                    width: "200px",
                  }}
                  onClick={() => {
                    handleFilter(contact.Name);
                  }}
                >
                  {" "}
                  ADD CONTACT
                  <BsFillTrashFill />{" "}
                </button>
              </li>
              <li>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "#9dd045",
                    height: "55px",
                    width: "200px",
                  }}
                  onClick={() => {
                    handleFilter(contact.Name);
                  }}
                >
                  {" "}
                  ARCHIVE
                  <BsFillTrashFill />{" "}
                </button>
              </li>
              <li>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    height: "55px",
                    width: "200px",
                  }}
                  onClick={() => {
                    handleFilter(contact.Name);
                  }}
                  className="btn btn-danger btn-sm"
                >
                  {" "}
                  DELETE CONTACT
                  <BsFillTrashFill />{" "}
                </button>
              </li>
            </ul>
          </div>{" "}
        </div>
      </div>
    ));
    return <div>{listitems}</div>;
  }

  function ContactMap() {
    return (
      <div class={visiblestatus}>
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
          class="btn btn-primary"
        >
          HIDE/SHOW CONTACTS
        </button>

        <div class="invisible"> This is invisible </div>

        <ContactMap />
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
      </div>
    </div>
  );
}
