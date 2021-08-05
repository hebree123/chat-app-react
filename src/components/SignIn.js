import React from "react";

import firebase from "firebase";
import { auth } from "../firebase";

import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { FcGoogle } from "react-icons/fc";
import { FaComment } from "react-icons/fa";

const useStyles = makeStyles({
  appHeader: {
    position: "relative",
    marginTop: "15vh",
    fontWeight: "900",
    fontStretch: "200%",
    fontSize: "4.2rem",
    color: "#7261A3",
    cursor: "default",
  },

  headerIcon: {
    position: "absolute",
    top: "-5px",
    right: "35px",
    fontWeight: "900",
    fontStretch: "200%",
    fontSize: "4.2rem",
    color: "#7261A3",
  },

  heroText: {
    marginTop: "3vh",
    marginBottom: "3vh",
    padding: "10px",
    borderRadius: "15px",
    fontWeight: "700",
    fontStretch: "200%",
    fontSize: "2.8rem",
    color: "#7261A3",
    backgroundColor: "#FCBFB7",
    cursor: "default",
  },

  signInButton: {
    fontSize: "1rem",
    fontWeight: "600",
    fontStretch: "150%",
    letterSpacing: "1px",
    color: "white",
    marginTop: "1vh",
    border: "none",
    borderRadius: "15px",
    padding: "13px 14px 10px 10px",
    backgroundColor: "#7261A3",
    "&:hover": {
      backgroundColor: "#A67DB8",
    },
  },

  googleIcon: {
    fontSize: "2.1rem",
    marginRight: "0.5rem",
    backgroundColor: "white",
    padding: "3px",
    marginBottom: "3px",
    borderRadius: "50px",
  },
});

function SignIn() {
  const classes = useStyles();

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignContent="center"
    >
      <Grid item>
        <Typography variant="h1" xs={6} className={classes.appHeader}>
          Chat
          <br />
          Board
          <FaComment className={classes.headerIcon} />
        </Typography>
      </Grid>

      <Grid item>
        <Typography className={classes.heroText}>
          Simple.
          <br />
          Safe.
          <br />
        </Typography>
      </Grid>

      <Grid item>
        <Button className={classes.signInButton} onClick={signInWithGoogle}>
          <FcGoogle className={classes.googleIcon} />
          SIGN IN WITH GOOGLE
        </Button>
      </Grid>
    </Grid>
  );
}

export default SignIn;
