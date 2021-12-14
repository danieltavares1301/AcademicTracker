import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Avatar,
  Typography,
  Divider,
  Button,
  IconButton,
  Grid,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fontSize } from "@mui/system";
import "./AccountProfile.css";
import PeopleIcon from "@material-ui/icons/People";
import axios from "axios";
import { getUserData } from "../../Services/authService";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    div: {
      margin: theme.spacing(1, "auto"),
    },
    card: {
      marginTop: theme.spacing(1),
    },
    faculdade: {
      fontSize: 20,
    },
    avatar: {
      margin: theme.spacing(1, "auto"),
      height: 90,
      width: 90,
      aspectRatio: 1,
    },
    nome: {
      fontSize: 20,
    },
    curso: {
      fontSize: 15,
    },
    avatarFaculdade: {
      height: 30,
      width: 30,
      aspectRatio: 1,
    },
    numberFollowers: {
      marginLeft: theme.spacing(2),
    },
    followers: {
      marginBottom: theme.spacing(-2),
    },
  })
);

const AccountProfile = (props) => {
  const classes = useStyles();
  const [data, setDatas] = useState({
    name: "",
    profilePicture: "",
  });

  useEffect(() => {
    async function loadDatas() {
      const response = await getUserData();
      setDatas({
        name: response.name,
        profilePicture: response.profilePicture,
      });
    }
    console.log(data);
    loadDatas();
  }, []);

  return (
    <Card className={classes.card}>
      <CardContent className={classes.div}>
        {[data].map((user) => {
          return (
            <>
              <div className="div">
                <Avatar className={classes.avatar} src={user.profilePicture}>
                  {user.name[0]}
                </Avatar>
                <Typography
                  gutterBottom
                  component="div"
                  className={classes.nome}
                >
                  {user.name}
                </Typography>

                {/*user.currentCourse.map((info) => {
                  return (
                    <>
                      <Typography
                        gutterBottom
                        component="div"
                        className={classes.curso}
                      >
                        {info.course}
                      </Typography>
                      <CardHeader
                        className="nomeUniversidade"
                        avatar={
                          <Avatar
                            className={classes.avatarFaculdade}
                            aria-label="recipe"
                            //src={info.pictureUniversity}
                          />
                        }
                        title={info.university}
                        titleTypographyProps={{
                          variant: "h10",
                        }}
                      />
                    </>
                  );
                })*/}

                <hr className="hrTitle" />
                <Typography variant="body2" color="text.secondary"></Typography>
              </div>
              <IconButton className={classes.followers}>
                <PeopleIcon />
                <Typography className={classes.numberFollowers}>
                  10 Seguidores
                </Typography>
              </IconButton>
            </>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default AccountProfile;

//const currentUser = useSelector((state) => state.account.user);

/*useEffect(() => {
    async function fetchUser() {
      try {
        const response = await http.get(`/api/home/user/${params.username}`);
        setUser(response.data);
      } catch (error) {}
    }
    fetchUser();
  }, [params]);

  const { ...rest } = props;
  const params = useParams();
  const [user, setUser] = useState([]);
  const isCurrentUser = currentUser?.id === user?.id;
*/
