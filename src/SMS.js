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
import { event } from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { change } from "./targetslice";

// import { useTarget, useTargetUpdate } from "./TargetContext.JS";

//export const MessageWindow = ({ user3, password3, target3 }) => {}

export default function SMS({ user1, password1 }) {
  const target = useSelector((state) => state.target.value);
  const dispatch = useDispatch();
  const [show, setshow] = useState("invisible");
  const [xaxis, setxaxis] = useState(0);
  const [yaxis, setyaxis] = useState(0);

  const [visiblestatus, setvisiblestatus] = useState("invisible");

  const [currentmessages, setcurrentmessages] = useState({
    Name: "NamesA",
    messages: [
      {
        Author: "Joanne",
        Text: "Text1Text1Text1Text1Text1Text1Text1Text1Text1Text1Text1Text1Text1Text1Text1",
        Segment: 1,
        date: "08/09/2022",
        time: "07:40:15 PM",
        alignment: "left",
      },
      {
        Author: "John",
        Text: "Text1Text1Text1Text1Text1Text1Text1Text1Text1Text1Text1Text1Text1Text1Text1",
        Segment: 2,
        date: "08/09/2022",
        time: "07:40:15 PM",
        alignment: "right",
      },
    ],
  });

  const [rightclicktarget, setrightclicktarget] = useState("Names 0");

  const [contacts, setContacts] = useState([
    {
      Name: "NamesA",
      messages: [
        {
          Author: "Author1",
          Text: "Text1",
          Segment: 1,
          date: "08/09/2022",
          time: "07:40:15 PM",
          alignment: "left",
        },
      ],
    },
    {
      Name: "NamesB",
      messages: [
        {
          Author: "Names2",
          Text: "Text1",
          Segment: 1,
          date: "08/09/2022",
          time: "07:40:15 PM",
          alignment: "left",
        },
      ],
    },
    {
      Name: "NamesC",
      messages: [
        {
          Author: "Names3",
          Text: "Text1",
          Segment: 1,
          date: "08/09/2022",
          time: "07:40:15 PM",
          alignment: "left",
        },
      ],
    },
    {
      Name: "NamesD",
      messages: [
        {
          Author: "Names4",
          Text: "Text1",
          Segment: 1,
          date: "08/09/2022",
          time: "07:40:15 PM",
          alignment: "Left",
        },
      ],
    },
  ]);
  const tempcontacts1 = useRef("contacts");
  tempcontacts1.current = contacts;
  const messagesendref = useRef(null);
  const [endpoint1, setendpoint1] = useState("http://localhost:8001/getsms");
  const [endpoint2, setendpoint2] = useState("http://localhost:8002/sendsms");
  const [loginEndpoint, setloginEndpoint] = useState(
    "http://localhost:8004/general"
  );

  const [user, setuser] = useState(user1);
  const [password, setpassword] = useState(password1);

  function getmessages() {
    //  e.preventDefault();
    //    const receiver = window.sessionStorage.getItem("currentcontact");
    const parcela1 = "{ user:" + user + ", password:" + password + "}";

    axios
      .post(endpoint1, parcela1)
      .then((resp) => {
        //  console.log(resp.data);
        const receivedinfo = resp.data;
        const obj1 = JSON.stringify(receivedinfo);
        const obj2 = JSON.stringify(tempcontacts1.current);
        console.log("Target is: " + target);

        if (obj1.length === obj2.length) {
          console.log("lawl");
        } else {
          setContacts(receivedinfo);
          console.log(target);

          //this bricks the entire program
          // because of the current stale closure with redux
          handleFilter(target);

          const element = document.getElementById("theend");
          element.scrollIntoView();
        }

        //  setcurrentmessages(palokisparcel.at(0));
      })
      .catch((error) => console.log(error));
  }

  const getinitialmessages = (target) => {
    const parcela1 = "{ user:" + user + ", password:" + password + "}";
    const target2 = target;
    axios
      .post(endpoint1, parcela1)
      .then((resp) => {
        console.log(resp.data);
        const receivedinfo = resp.data;

        const obj1 = JSON.stringify(receivedinfo);
        const obj2 = JSON.stringify(tempcontacts1.current);

        console.log("Target is: " + target);

        if (obj1.length == obj2.length) {
          console.log("lawl");
        } else {
          setContacts(receivedinfo);
          console.log(target);

          //this bricks the entire program
          // because of the current stale closure with redux
          const element = document.getElementById("theend");
          element.scrollIntoView();
        }

        //  setcurrentmessages(palokisparcel.at(0));
        console.log("Target2 is:" + target2);
        if (target2 == "Unassigned") {
          dispatch(
            change(receivedinfo.at(0).Name)
            //  type: "change",
            //  payload: { cargo: palokisparcel.at(0).Name },
          );
        }

        //  console.log(target.Name);
        console.log(target);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const handleClick = () => setshow("invisible");
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const element = document.getElementById("theend");
    element.scrollIntoView();
  }, []);

  useEffect(() => {
    const element = document.getElementById("theend");
    element.scrollIntoView();
  }, [contacts, currentmessages]);

  useEffect(() => {
    getinitialmessages(target);
  }, []);

  useEffect(() => {
    handleFilter(target);
    const timer = setInterval(() => {
      getinitialmessages(target);
      //   getmessages();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [target, contacts]);

  function handleFilter(target1) {
    var newArray = contacts.filter(function (el) {
      return el.Name == target1;
    });
    console.log(newArray);
    //   dispatch(
    //    change(contactname)
    //  type: "change",
    //  payload: { cargo: palokisparcel.at(0).Name },
    //  );
    //window.sessionStorage.setItem("currentcontact", contactname);

    if (newArray.length > 0) {
      setcurrentmessages(newArray[0]);
    }

    console.log(currentmessages);
  }

  function ChatBox() {
    return (
      <div
        style={{
          height: window.innerHeight * 0.75,
          width: window.innerWidth * 0.75,
        }}
        id="chatbox"
      >
        <table className="table">
          <thead>
            <tr>
              {" "}
              <th>
                {" "}
                <div>SMS MESSAGES FROM:{"  " + currentmessages.Name} </div>{" "}
              </th>{" "}
            </tr>
          </thead>

          <tbody>
            {currentmessages.messages.map((message) => (
              <tr key={message.Segment}>
                <td>
                  {" "}
                  <div
                    style={{
                      float: message.alignment,
                      width: window.innerWidth * 0.41,
                    }}
                    class={message.alignment}
                  >
                    {" "}
                    <div> {message.date + " ,  " + message.time} </div>
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
    //   console.log(contacts);
    const listitems = contacts.map((contact) => (
      <div key={contact.Name}>
        {" "}
        <div class="flex-container">
          {" "}
          <button
            style={{
              backgroundColor: "#9dd045",
              color: "white",
              height: "45px",
              width: "125px",
            }}
            onContextMenu={(event) => {
              event.preventDefault();
              var newtarget = contact.Name;
              setrightclicktarget(newtarget);
              setshow("visible");
              setyaxis(event.pageY - 60);
              setxaxis(event.pageX);
            }}
            onClick={() => {
              //handleFilter(contact.Name);
              dispatch(
                change(contact.Name)
                //  type: "change",
                //  payload: { cargo: palokisparcel.at(0).Name },
              );
              const element = document.getElementById("theend");
              element.scrollIntoView();
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
      <div id="buttonpluscontact">
        <button
          onClick={() => {
            togglecontacts();
          }}
          type="submit"
          style={{
            height: "55px",
            width: "135px",
            backgroundColor: "#c1ed74",
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
    <div id="smspage" class="flex-container">
      <Buttonpluscontact />
      <div>
        <ChatBox />
      </div>
      <div>
        <Rightclickmenu />
      </div>
    </div>
  );
}
