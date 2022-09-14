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
        //  console.log(obj1.length, obj2.length);
        //  console.log(obj1);
        //  console.log("XXXXXXXXXX");
        //  console.log(obj2);
        //  console.log(obj1, obj2);
        if (obj1 == obj2) {
          console.log("lawl, repeated with many repercussions");
        } else {
          setContacts(receivedinfo);
        }

        //  handleFilter(target);
        //  setcurrentmessages(palokisparcel.at(0));
      })
      .catch((error) => console.log(error));
  }

  const getinitialmessages = () => {
    const parcela1 = "{ user:" + user + ", password:" + password + "}";

    axios
      .post(endpoint1, parcela1)
      .then((resp) => {
        console.log(resp.data);
        const palokisparcel = resp.data;

        setContacts(palokisparcel);

        // handleFilter(target);
        setcurrentmessages(palokisparcel.at(0));
      })
      .catch((error) => console.log(error));
    dispatch({ ...change, payload: { cargo: contacts.at(0).Name } });
  };

  const sendmessage = async () => {
    const messagetosend = document.getElementById("messagetext").value;

    const parcela2 =
      "{ from:" +
      user +
      ", to:" +
      currentmessages.Name +
      ",user:" +
      user +
      ",password:" +
      password +
      ", text:" +
      messagetosend +
      "}";

    axios.post(endpoint2, parcela2).catch((error) => console.log(error));
    const element = document.getElementById("theend");
    element.scrollIntoView();

    //  getmessages();
    //  const updatedcontacts = contacts;
    //  setcurrentmessages(updatedcontacts.at(0));
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

  //  useEffect(() => {
  //const element = document.getElementById("theend");     element.scrollIntoView();
  //  }, [contacts]);
  //  element.scrollIntoView();

  useEffect(() => {
    getinitialmessages();
    setInterval(() => {
      getmessages();
    }, 5000);
  }, []);
  function handleFilter(contactname) {
    var newArray = contacts.filter(function (el) {
      return el.Name == contactname;
    });
    console.log(newArray);
    dispatch({ ...change, payload: { cargo: contactname } });
    //window.sessionStorage.setItem("currentcontact", contactname);
    setcurrentmessages(newArray[0]);
    console.log(currentmessages);
  }

  function ChatBox() {
    return (
      <div
        style={{
          height: window.innerHeight * 0.75,
          width: window.innerWidth * 0.8,
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
                    style={{ textAlign: message.alignment }}
                    class="p-3 mb-2 bg-dark text-white"
                  >
                    {message.date +
                      " ,  " +
                      message.time +
                      " ,  " +
                      message.Author +
                      " : " +
                      message.Text}{" "}
                  </div>
                </td>
              </tr>
            ))}

            <div id="theend" ref={messagesendref} />
          </tbody>
        </table>
        <button
          style={{
            backgroundColor: "#9dd045",
            color: "white",
            height: "50px",
            width: "100%",
          }}
          onClick={() => {
            //  const element = document.getElementById("theend");
            //  element.scrollIntoView();
            setInterval(() => {
              getmessages();
            }, 5000);
          }}
        >
          {" "}
          Fetch Messages{" "}
        </button>{" "}
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
        <div> {target} </div>

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
