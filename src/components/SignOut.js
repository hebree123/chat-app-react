import React from "react";
import { auth } from "../firebase";
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { BiLogOutCircle } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const useStyles = makeStyles({
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },

  signOutButton: {
    backgroundColor: "#7261A3",
    fontSize: "2rem",
    marginBottom: "15px",
    borderRadius: "10px",
    padding: "10px 5px 10px 5px",
    color: "white",
    "&:hover": {
      backgroundColor: "#A67DB8",
    },
  },

  gitHubLink: {
    backgroundColor: "#7261A3",
    fontSize: "2rem",
    borderRadius: "10px",
    padding: "10px 16px 10px 16px",
    color: "white",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#A67DB8",
    },
  },
});

function SignOut() {
  const classes = useStyles();
  return (
    <Box className={classes.toolBar}>
      <Button
        size="small"
        className={classes.signOutButton}
        onClick={() => auth.signOut()}
      >
        <BiLogOutCircle />
      </Button>
      <a href="https://github.com/hebree123/chat-app-react">
        <FaGithub className={classes.gitHubLink} />
      </a>
    </Box>
  );
}

export default SignOut;
