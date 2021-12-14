import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import About from "./About";
import Degree from "./Degree";
import Experiences from "./Experiences";
import Skills from "./Skills";

function Geral() {
  const useStyles = makeStyles((theme) =>
    createStyles({
      card: {
        marginTop: theme.spacing(3),
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid xs={8}>
      <Card>
        <About />
      </Card>
      <Card className={classes.card}>
        <Degree />
      </Card>
      <Card className={classes.card}>
        <Experiences />
      </Card>
      <Card className={classes.card}>
        <Skills />
      </Card>
    </Grid>
  );
}
export default Geral;
