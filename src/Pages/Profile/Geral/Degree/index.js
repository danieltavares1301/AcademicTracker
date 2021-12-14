import React from "react";
import {
  CardContent,
  Avatar,
  CardHeader,
  Typography,
  Grid,
  CardActionArea,
  Modal,
  Card,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles, createStyles } from "@material-ui/styles";
import "./Degree.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../../../../global.css";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(1),
    },
    cardActivities: {},
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

    form: {
      padding: theme.spacing(2),
    },
    item: {
      textAlign: "center",
      fontSize: 20,
    },
    divDialog: {
      alignItems: "center",
      direction: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    containerActivities: {
      width: 550,
      height: 550,
      position: "absolute",
    },
    divActivities: {
      width: 550,
      height: 550,
    },
    divAct: {
      marginLeft: theme.spacing(2),
      marginRigth: theme.spacing(2),
    },
    divCard: {
      margin: theme.spacing(1),
    },
    hCardDescriptionProject: {
      width: 105,
    },
    cardTitle: {
      color: "#808080",
    },
    nameFinishedSubjects: {
      marginBottom: theme.spacing(-2),
      fontWeight: 500,
      fontSize: 18,
    },
    nameProject: {
      fontWeight: 500,
      fontSize: 18,
    },
  })
);
function Degree() {
  const [data, setDatas] = useState([]);
  const [openDegree, setOpenDegree] = useState(false);
  const [openCurrentCourse, setOpenCurrentCourse] = useState(false);
  const [scroll, setScroll] = useState("body");
  const descriptionElementRef = useRef(null);

  const handleCloseDegree = () => {
    setOpenDegree(false);
  };

  const handleCloseCurrentCourse = () => {
    setOpenCurrentCourse(false);
  };

  useEffect(() => {
    async function loadDatas() {
      const response = await axios.get(
        "https://raw.githubusercontent.com/profsergiocosta/data/main/overview.json"
      );
      setDatas(response.data);
    }
    loadDatas();
  }, []);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  function cond(item) {
    var lista = [];
    for (var i in item) {
      lista.push(i);
    }
    if (lista.length > 1) {
      return <hr className="hr" />;
    }
  }
  const classes = useStyles();
  return (
    <div>
      <CardContent className="cardContent">
        <h className="cardTitle">Formação</h>
        <hr className="hrTitle" />
        {data.map((info) => {
          return (
            <div>
              {info.currentCourse.map((item) => {
                return (
                  <div className="final">
                    <CardActionArea
                      onClick={() => {
                        setOpenCurrentCourse(true);
                      }}
                    >
                      <Grid className="gridDegree" key={item.idCurrentCourse}>
                        <Avatar
                          className="gridAvatar"
                          aria-label="recipe"
                          src={item.pictureUniversity}
                        />
                        <h className="gridUniversity">{item.university}</h>
                        <h className="gridCourse">{item.course}</h>
                        <h className="gridYearCourse">{`${item.yearCourseStart} - Atualmente`}</h>
                      </Grid>
                    </CardActionArea>
                    {cond(info.degree)}
                  </div>
                );
              })}
              <hr className="hr" />
              {info.degree.map((item) => {
                return (
                  <div className="final">
                    <CardActionArea
                      onClick={() => {
                        setOpenDegree(true);
                      }}
                    >
                      <Grid className="gridDegree" key={item.idDegree}>
                        <Avatar
                          className="gridAvatar"
                          aria-label="recipe"
                          src={item.pictureUniversity}
                        />
                        <h className="gridUniversity">{item.university}</h>
                        <h className="gridCourse">{item.course}</h>
                        <h className="gridYearCourse">{`${item.yearCourseStart} - ${item.yearCourseEnd}`}</h>
                      </Grid>
                    </CardActionArea>

                    {cond(info.degree)}
                  </div>
                );
              })}
            </div>
          );
        })}
      </CardContent>

      <div className={classes.containerActivities}>
        <Dialog
          open={openDegree}
          onClose={handleCloseDegree}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <div className="divDialog">
            <IconButton
              title="voltar"
              className="buttonBack"
              onClick={handleCloseDegree}
            >
              <ArrowBackIcon />
            </IconButton>
            <DialogTitle id="scroll-dialog-title" className="dialogTitle">
              Atividades Exercidas
            </DialogTitle>
          </div>
          {data.map((info) => {
            return (
              <>
                {info.degree.map((item) => {
                  return (
                    <>
                      {item.activities.map((act) => {
                        return (
                          <>
                            <div className={classes.divActivities}>
                              <CardContent>
                                <Card className={classes.cardActivities}>
                                  <div className={classes.divCard}>
                                    <Typography
                                      className={classes.cardTitle}
                                      variant="h6"
                                    >
                                      Disciplinas cursadas
                                    </Typography>
                                    <hr className="hrTitle" />
                                    {act.disciplines.map((disc) => {
                                      return (
                                        <div
                                          key={disc.idDiscipline}
                                          className={classes.divAct}
                                        >
                                          <Typography
                                            className={
                                              classes.nameFinishedSubjects
                                            }
                                            variant="body1"
                                          >
                                            {disc.nameDiscipline}
                                          </Typography>
                                          <br />
                                          <Typography variant="body2">
                                            {disc.yearDiscipline}
                                          </Typography>
                                          {cond(act.disciplines)}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </Card>
                              </CardContent>
                              <CardContent>
                                <Card className={classes.cardActivities}>
                                  <div className={classes.divCard}>
                                    <Typography
                                      className={classes.cardTitle}
                                      variant="h6"
                                    >
                                      Participaçõs em projetos
                                    </Typography>

                                    <hr className="hrTitle" />
                                    {act.projects.map((proj) => {
                                      return (
                                        <div
                                          key={proj.idProjects}
                                          className={classes.divAct}
                                        >
                                          <Typography
                                            variant="body1"
                                            className={classes.nameProject}
                                          >
                                            {proj.nameProject}
                                          </Typography>
                                          <Typography variant="body1">
                                            {proj.descriptionProject}
                                          </Typography>
                                          <Typography variant="body2">
                                            {proj.yearProject}
                                          </Typography>
                                          {cond(act.projects)}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </Card>
                              </CardContent>
                              <CardContent>
                                <Card className={classes.cardActivities}>
                                  <div className={classes.divCard}>
                                    <Typography
                                      className={classes.cardTitle}
                                      variant="h6"
                                    >
                                      Artigos e TCCs publicados
                                    </Typography>
                                    <hr className="hrTitle" />
                                    {act.articleAndTcc.map((aat) => {
                                      return (
                                        <div
                                          key={aat.idArticleAndTcc}
                                          className={classes.divAct}
                                        >
                                          <Typography
                                            variant="body1"
                                            className={classes.nameProject}
                                          >
                                            {aat.nameArticleAndTcc}
                                          </Typography>
                                          <Typography variant="body2">
                                            {aat.typeArticleAndTcc}
                                          </Typography>
                                          <Typography variant="body1">
                                            {aat.descriptionArticleAndTcc}
                                          </Typography>
                                          <Typography variant="body2">
                                            {aat.publicationDate}
                                          </Typography>
                                          <Button
                                            variant="outlined"
                                            color="secondary"
                                          >
                                            Baixar
                                          </Button>
                                          {cond(act.articleAndTcc)}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </Card>
                              </CardContent>
                              <CardContent>
                                <Card className={classes.cardActivities}>
                                  <div className={classes.divCard}>
                                    <Typography
                                      className={classes.cardTitle}
                                      variant="h6"
                                    >
                                      Outras atividades
                                    </Typography>

                                    <hr className="hrTitle" />
                                    {act.othersActivities.map((others) => {
                                      return (
                                        <div
                                          key={others.idOthers}
                                          className={classes.divAct}
                                        >
                                          <Typography
                                            variant="body1"
                                            className={classes.nameProject}
                                          >
                                            {others.nameOthers}
                                          </Typography>
                                          <Typography variant="body1">
                                            {others.descriptionOthers}
                                          </Typography>
                                          <Typography variant="body2">
                                            {others.dateOthers}
                                          </Typography>
                                          {cond(act.othersActivities)}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </Card>
                              </CardContent>
                            </div>
                          </>
                        );
                      })}
                    </>
                  );
                })}
              </>
            );
          })}
        </Dialog>
      </div>

      <div className={classes.containerActivities}>
        <Dialog
          open={openCurrentCourse}
          onClose={handleCloseCurrentCourse}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <div className="divDialog">
            <IconButton
              title="voltar"
              className="buttonBack"
              onClick={handleCloseCurrentCourse}
            >
              <ArrowBackIcon />
            </IconButton>
            <DialogTitle id="scroll-dialog-title" className="dialogTitle">
              Atividades Exercidas
            </DialogTitle>
          </div>
          {data.map((info) => {
            return (
              <>
                {info.currentCourse.map((item) => {
                  return (
                    <>
                      {item.activities.map((act) => {
                        return (
                          <>
                            <div className={classes.divActivities}>
                              <CardContent>
                                <Card className={classes.cardActivities}>
                                  <div className={classes.divCard}>
                                    <Typography
                                      className={classes.cardTitle}
                                      variant="h6"
                                    >
                                      Disciplinas cursadas
                                    </Typography>
                                    <hr className="hrTitle" />
                                    {act.disciplines.map((disc) => {
                                      return (
                                        <div
                                          key={disc.idDiscipline}
                                          className={classes.divAct}
                                        >
                                          <Typography
                                            className={
                                              classes.nameFinishedSubjects
                                            }
                                            variant="body1"
                                          >
                                            {disc.nameDiscipline}
                                          </Typography>
                                          <br />
                                          <Typography variant="body2">
                                            {disc.yearDiscipline}
                                          </Typography>
                                          {cond(act.disciplines)}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </Card>
                              </CardContent>
                              <CardContent>
                                <Card className={classes.cardActivities}>
                                  <div className={classes.divCard}>
                                    <Typography
                                      className={classes.cardTitle}
                                      variant="h6"
                                    >
                                      Participaçõs em projetos
                                    </Typography>

                                    <hr className="hrTitle" />
                                    {act.projects.map((proj) => {
                                      return (
                                        <div
                                          key={proj.idProjects}
                                          className={classes.divAct}
                                        >
                                          <Typography
                                            variant="body1"
                                            className={classes.nameProject}
                                          >
                                            {proj.nameProject}
                                          </Typography>
                                          <Typography variant="body1">
                                            {proj.descriptionProject}
                                          </Typography>
                                          <Typography variant="body2">
                                            {proj.yearProject}
                                          </Typography>
                                          {cond(act.projects)}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </Card>
                              </CardContent>
                              <CardContent>
                                <Card className={classes.cardActivities}>
                                  <div className={classes.divCard}>
                                    <Typography
                                      className={classes.cardTitle}
                                      variant="h6"
                                    >
                                      Artigos e TCCs publicados
                                    </Typography>
                                    <hr className="hrTitle" />
                                    {act.articleAndTcc.map((aat) => {
                                      return (
                                        <div
                                          key={aat.idArticleAndTcc}
                                          className={classes.divAct}
                                        >
                                          <Typography
                                            variant="body1"
                                            className={classes.nameProject}
                                          >
                                            {aat.nameArticleAndTcc}
                                          </Typography>
                                          <Typography variant="body2">
                                            {aat.typeArticleAndTcc}
                                          </Typography>
                                          <Typography variant="body1">
                                            {aat.descriptionArticleAndTcc}
                                          </Typography>
                                          <Typography variant="body2">
                                            {aat.publicationDate}
                                          </Typography>
                                          <Button
                                            variant="outlined"
                                            color="secondary"
                                          >
                                            Baixar
                                          </Button>
                                          {cond(act.articleAndTcc)}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </Card>
                              </CardContent>
                              <CardContent>
                                <Card className={classes.cardActivities}>
                                  <div className={classes.divCard}>
                                    <Typography
                                      className={classes.cardTitle}
                                      variant="h6"
                                    >
                                      Outras atividades
                                    </Typography>

                                    <hr className="hrTitle" />
                                    {act.othersActivities.map((others) => {
                                      return (
                                        <div
                                          key={others.idOthers}
                                          className={classes.divAct}
                                        >
                                          <Typography
                                            variant="body1"
                                            className={classes.nameProject}
                                          >
                                            {others.nameOthers}
                                          </Typography>
                                          <Typography variant="body1">
                                            {others.descriptionOthers}
                                          </Typography>
                                          <Typography variant="body2">
                                            {others.dateOthers}
                                          </Typography>
                                          {cond(act.othersActivities)}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </Card>
                              </CardContent>
                            </div>
                          </>
                        );
                      })}
                    </>
                  );
                })}
              </>
            );
          })}
        </Dialog>
      </div>
    </div>
  );
}
export default Degree;
