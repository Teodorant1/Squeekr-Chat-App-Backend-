import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios, { Axios } from "axios";
import { useState } from "react";
import SMS from "./SMS";
import { Messagecatapult } from "./Messagecatapult";

export const MessageWindow = ({ user3, password3 }) => {
  //export const MessageWindow = ({ user3, password3, target3 }) => {}

  const [user, setuser] = react.useState(user3);
  const [password, setpassword] = react.useState(password3);
  const [endpoint, setendpoint] = useState("http://localhost:8002/sendsms");

  return (
    <div>
      <SMS user1={user} password1={password} />
      <Messagecatapult user4={user} password4={password} target4={"paloki"} />
    </div>
  );
};
