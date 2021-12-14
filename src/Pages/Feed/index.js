import React, { useCallback, useEffect, useState } from "react";
import { Container, Box, makeStyles } from "@material-ui/core";

import PostCard from "../../Components/PostCard";

const useStyles = makeStyles(() => ({
  root: {},
}));

function Feed() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Box display="flex">
        <div className={classes.root}>
          <PostCard />
        </div>
      </Box>
    </Container>
  );
}

export default Feed;
