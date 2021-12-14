import React from "react";
import { CardMedia, makeStyles } from "@material-ui/core";
import {
  IconButton,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  CardActionArea,
  Grid,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
//import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";

const axios = require("axios");

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    display: "flex",
    alignItems: "center",
  },
  caption: {
    marginRight: theme.spacing(1),
  },
  message: {
    height: "auto",
    width: 465,
    marginTop: theme.spacing(-3),
  },
  image: {
    height: "auto",
    width: 500,
    maxWidth: "100%",
  },
  content: {
    padding: 0,
  },
  favorite: {
    marginLeft: "auto",
  },
}));

function PostCard() {
  const [datas, setData] = useState([]);
  const classes = useStyles();
  //  const navigate = useNavigate();

  //  const handlePostClick = () => {
  //    navigate(`/post/${post.slug}`);
  //  };
  useEffect(() => {
    async function loadData() {
      const response = await axios.get(
        "https://raw.githubusercontent.com/profsergiocosta/data/main/dado.json"
      );
      console.log(response.data);
      setData(response.data);
    }
    loadData();
  }, []);

  return (
    <>
      {datas.map((d) => {
        return (
          <Card key={d.id} className={classes.root}>
            <CardHeader
              avatar={<Avatar src={d.fotoPerfil}></Avatar>}
              title={<Typography variant="h10">{d.author}</Typography>}
              subheader={
                <div className={classes.subheader}>
                  <Typography variant="caption" className={classes.caption}>
                    {moment(d.date).fromNow()}
                  </Typography>
                </div>
              }
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                className={classes.message}
              >
                {d.description}
              </Typography>
            </CardContent>
            <CardActionArea>
              <img src={d.imagePost} className={classes.image} alt="img" />
            </CardActionArea>
            <CardActions disableSpacing>
              <IconButton aria-label="like">
                <FavoriteIcon />
                <Typography
                  style={{ cursor: "pointer" }}
                  color="textSecondary"
                  variant="body2"
                >
                  {d.likes}
                </Typography>
              </IconButton>
              <IconButton aria-label="comment">
                <MessageIcon />
                <Typography
                  className={classes.reactions}
                  color="textSecondary"
                  variant="body2"
                >
                  {d.comments}
                </Typography>
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}

export default PostCard;
