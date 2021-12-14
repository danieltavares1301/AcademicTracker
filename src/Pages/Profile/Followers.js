import React from "react";
import { Card, Grid } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(1),
    },
  })
);
function Followers() {
  const classes = useStyles();
  return (
    <Grid spacing={2} className={classes.root}>
      <Card>Followers</Card>
    </Grid>
  );
}
export default Followers;
