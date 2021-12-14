import { makeStyles } from "@material-ui/core";
import React from "react";
import Routes from "./routes";

export default function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

/*
//import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
//import Box from '@material-ui/core/Box';
import Link from "@material-ui/core/Link";
//import ProTip from './ProTip';
import SignUp from "./Pages/SignUp";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return <SignUp />;
  /*
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );*/
