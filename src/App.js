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
import Toggle from "./Toggle";
import "./App.css";
import React from "react";
import { useState, useContext, createContext } from "react";
import SMS from "./SMS";
import Axios from "axios";
import { event } from "jquery";
import { Messagecatapult } from "./Messagecatapult";

const Targetcontext = React.createContext();

function App() {
  const [target, settarget] = useState("Paloki");

  const [toggled, setToggled] = React.useState(true);
  const handleClick = () => {
    setToggled((s) => !s);
  };
  const [loginEndpoint, setloginEndpoint] = useState(
    "http://localhost:8004/general"
  );
  const [pagename, setpagename] = useState("loginpage");

  const [cargo2, setcargo2] = useState({
    method: "login",
    user: "john",
    password: "johny",
  });

  const [username0, setusername0] = useState("username");
  const [password0, setpassword0] = useState("Password");

  function handlelogin() {
    const loginpassword = document.getElementById("Password").value;
    const loginusername = document.getElementById("username").value;

    setusername0(loginusername);
    setpassword0(loginpassword);

    const loginmethod = "login";

    const loginmessage =
      "{ method:login" +
      ", username:" +
      loginusername +
      ", password:" +
      loginpassword +
      "}";

    Axios.post(loginEndpoint, loginmessage)
      .then((resp) => {
        setpagename(resp.data);
      })
      .catch((error) => console.log(error));
  }

  function LoginMenu() {
    return (
      <div
        id="homepage"
        style={{
          backgroundColor: "#00b1f0",
          color: "white",
          height: window.innerHeight,
          width: window.innerWidth,
        }}
      >
        <div id="credsquare" class=" ">
          <div>
            <div
              id="homepageimage"
              style={{
                backgroundColor: "#9dd045",
                color: "white",
                height: "300px",
                width: "300px",
              }}
            >
              {" "}
            </div>

            <div>
              <label htmlFor="username">
                <h1>Username</h1>
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
            <button
              onClick={() => {
                handlelogin(event);
              }}
              type="submit"
              style={{
                backgroundColor: "#00b1f0",
                color: "white",
                height: "60px",
                width: "300px",
              }}
            >
              Login{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }

  function Leftmenu() {
    return (
      <div style={{ margin: 0 }} id="leftmenu">
        <div> {<SVGIcon4 />} </div>

        <button
          style={{ backgroundColor: "#00b1f0", width: 100, margin: 5 }}
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setpagename("dashboard");
          }}
        >
          {<SVGIcon14 />} <div style={{ justifycontent: "left" }}> </div>
          Dashboard
        </button>

        <button
          style={{ backgroundColor: "#00b1f0", width: 100, margin: 5 }}
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setpagename("chat");
          }}
        >
          {<SVGIcon13 />} <div style={{ justifycontent: "left" }}> </div> Chat
        </button>
        <button
          style={{ backgroundColor: "#00b1f0", width: 100, margin: 5 }}
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setpagename("sms");
          }}
        >
          {<SVGIcon17 />} <div style={{ justifycontent: "left" }}> </div> SMS
        </button>
        <button
          style={{ backgroundColor: "#00b1f0", width: 100, margin: 5 }}
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setpagename("voicemail");
          }}
        >
          {<SVGIcon19 />} <div style={{ justifycontent: "left" }}> </div>{" "}
          Voicemail
        </button>
        <button
          style={{ backgroundColor: "#00b1f0", width: 100, margin: 5 }}
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setpagename("fax");
          }}
        >
          {<SVGIcon15 />} <div style={{ justifycontent: "left" }}> </div> Fax
        </button>
        <button
          style={{ backgroundColor: "#00b1f0", width: 100, margin: 5 }}
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setpagename("notes");
          }}
        >
          {<SVGIcon16 />} <div style={{ justifycontent: "left" }}> </div> Notes
        </button>
        <Toggle toggled={toggled} onClick={handleClick} />
      </div>
    );
  }

  function LeftmenuLight() {
    {
      return (
        <div style={{ margin: 0 }} id="leftmenulight">
          <div> {<SVGIcon4 />} </div>

          <button
            style={{ width: 100, margin: 5 }}
            type="button"
            className="btn btn-light"
            onClick={() => {
              setpagename("dashboard");
            }}
          >
            {<SVGIcon3 />} <div style={{ justifycontent: "left" }}> </div>{" "}
            Dashboard
          </button>
          <button
            style={{ width: 100, margin: 5 }}
            type="button"
            className="btn btn-light"
            onClick={() => {
              setpagename("chat");
            }}
          >
            {<SVGIcon2 />} <div style={{ justifycontent: "left" }}> </div> Chat
          </button>
          <button
            style={{ width: 100, margin: 5 }}
            type="button"
            className="btn btn-light"
            onClick={() => {
              setpagename("sms");
            }}
          >
            {<SVGIcon10 />} <div style={{ justifycontent: "left" }}> </div> SMS
          </button>
          <button
            style={{ width: 100, margin: 5 }}
            type="button"
            className="btn btn-light"
            onClick={() => {
              setpagename("voicemail");
            }}
          >
            {<SVGIcon12 />} <div style={{ justifycontent: "left" }}> </div>{" "}
            Voicemail
          </button>
          <button
            style={{ width: 100, margin: 5 }}
            type="button"
            className="btn btn-light"
            onClick={() => {
              setpagename("fax");
            }}
          >
            {<SVGIcon6 />} <div style={{ justifycontent: "left" }}> </div> Fax
          </button>
          <button
            style={{ width: 100, margin: 5 }}
            type="button"
            className="btn btn-light"
            onClick={() => {
              setpagename("notes");
            }}
          >
            {<SVGIcon1 />} <div style={{ justifycontent: "left" }}> </div> Notes
          </button>
          <Toggle toggled={toggled} onClick={handleClick} />
        </div>
      );
    }
  }

  function Display1() {
    if (toggled === true) {
      return (
        <div class="p-3 mb-2 bg-dark text-white flex-container">
          {" "}
          <Leftmenu />
          <Center />
        </div>
      );
    } else {
      return (
        <div class="p-3 mb-2 bg-light text-dark flex-container">
          <LeftmenuLight />
          <Center />{" "}
        </div>
      );
    }
  }

  function Center() {
    if (pagename == "sms")
      return (
        <div>
          {" "}
          <SMS user1={username0} password1={password0} />{" "}
          <Messagecatapult
            user4={username0}
            password4={password0}
            target4={"paloki"}
          />
        </div>
      );
    else if (pagename == "dashboard") return <div> Dashboard </div>;
  }

  if (pagename == "loginpage") {
    return <LoginMenu />;
  } else if (toggled === true) {
    return (
      <Targetcontext.Provider value={{ target, settarget }}>
        <Display1 />{" "}
      </Targetcontext.Provider>
    );
  } else {
    return (
      <Targetcontext.Provider value={{ target, settarget }}>
        {" "}
        <Display1 />{" "}
      </Targetcontext.Provider>
    );
  }
}

export default App;
