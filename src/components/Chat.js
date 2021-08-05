import React, { useState, useEffect } from "react";
import "./Chat.css";

import { auth, db } from "../firebase";

import SignOut from "./SignOut";
import SendMessage from "./SendMessage";

import { Avatar, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  chatContainer: {
    marginTop: "7vh",
  },

  profilePic: {
    border: "6px #7261A3 solid",
  },

  chatText: {
    color: "#7261A3",
    fontSize: "1.3rem",
    lineHeight: "1.7rem",
    fontWeight: "700",
    backgroundColor: "white",
    padding: "13px 12px 10px 12px",
    margin: "0 0 28px 12px",
    borderRadius: "10px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
});

function Chat() {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <Container className={classes.chatContainer}>
      <div>
        <SignOut />
      </div>
      <div className="chatGrid">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div
            key={id}
            className={`msg ${
              uid === auth.currentUser.uid ? "sent" : "received"
            }`}
          >
            <Avatar className={classes.profilePic} src={photoURL} alt="" />
            <Typography variant="subtitle1" className={classes.chatText}>
              {text}
            </Typography>
          </div>
        ))}
      </div>
      <SendMessage />
    </Container>
  );
}

export default Chat;
