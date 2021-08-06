import React, { useState } from "react";
import firebase from "firebase";
import { db, auth } from "../firebase";

import { Box, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { RiSendPlaneFill } from "react-icons/ri";

const useStyles = makeStyles({
  sendMessageBox: {
    marginRight: "31px",
  },

  messageInput: {
    marginTop: "15px",
    padding: "10px 10px 10px 10px",
    border: "7.5px #7261A3 solid",
    borderRadius: "15px",
  },

  messageInputText: {
    marginTop: "3px",
    color: "#7261A3",
    fontSize: "1.3rem",
    fontWeight: "700",
  },

  sendIcon: {
    color: "#7261A3",
    fontSize: "2rem",
    cursor: "default",
  },
});

function SendMessage() {
  const classes = useStyles();
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
  }
  return (
    <Box className={classes.sendMessageBox}>
      <form onSubmit={sendMessage}>
        <TextField
          className={classes.messageInput}
          fullWidth={true}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Enter Message"
          InputProps={{
            endAdornment: (
              <Button type="submit" size="small" disableTouchRipple={true}>
                <RiSendPlaneFill className={classes.sendIcon} />
              </Button>
            ),
            disableUnderline: true,
            className: classes.messageInputText,
          }}
        />
      </form>
    </Box>
  );
}

export default SendMessage;
