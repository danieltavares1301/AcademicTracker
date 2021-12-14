import React, { Component, useState } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  TextField,
  Button,
  CardContent,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import { Container } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import AccountProfile from "../Profile/AccountProfile";
import { makeStyles, createStyles } from "@material-ui/styles";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { Modal } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(1),
    },
    cardFeed: {
      marginLeft: theme.spacing(10),
    },
    grid3: {
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(1),
    },
    TextField: {
      marginTop: theme.spacing(2),

      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(1),
      width: 450,
    },
    button: {
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
      fontSize: 12,
    },
    container: {
      width: 500,
      height: 550,
      backgroundColor: "white",
      position: "absolute",
      top: 0,
      bottom: 0,
      border: "1 solid",
      left: 0,
      right: 0,
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        width: "100vw",
        height: "100vh",
      },
    },
    form: {
      padding: theme.spacing(2),
    },
    item: {
      marginBottom: theme.spacing(3),
    },
  })
);
function Home() {
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };
  //const account = useSelector((state) => state.account);
  const classes = useStyles();
  //console.log(account);
  return (
    <Grid container spacing={5} direction="row" justifyContent="center" xs={12}>
      <Grid item xs={3}>
        <AccountProfile />
      </Grid>
      <Grid container spacing={5} xs={6} className={classes.root}>
        <Grid item xs={11} justifyContent="center">
          <Card className={classes.cardFeed}>
            <CardActionArea>
              <TextField
                onClick={() => setOpen(true)}
                className={classes.TextField}
                label="Publique algo"
                id="outlined-basic"
                variant="outlined"
              />
            </CardActionArea>
            <hr />
            <Button
              className={classes.button}
              variant="contained"
              startIcon={<AddPhotoAlternateIcon />}
            >
              Foto/Vídeo
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              startIcon={<AssignmentLateIcon />}
            >
              Oportunidades
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              startIcon={<PictureAsPdfIcon />}
            >
              Material
            </Button>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={5} xs={3} className={classes.grid3}>
        <Grid item xs={12}>
          <Card>aa</Card>
        </Grid>
      </Grid>
      <Modal open={open}>
        <Card className={classes.container}>
          <CardContent>
            <form className={classes.form} autoComplete="off">
              <div className={classes.item}>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  defaultValue="Escreva algo..."
                  variant="outlined"
                  label="Descrição"
                  size="small"
                  style={{ width: "100%" }}
                />
              </div>

              <div className={classes.item}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginRight: 20 }}
                  onClick={() => setOpenAlert(true)}
                >
                  Create
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Modal>
    </Grid>
  );
}

export default Home;
