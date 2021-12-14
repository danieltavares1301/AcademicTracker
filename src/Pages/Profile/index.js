import React, { Component, useState } from "react";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import Posts from "./Posts";
import Materiais from "./Materiais";
import Geral from "./Geral";
import AccountProfile from "./AccountProfile";
import { grid } from "@mui/system";
import Followers from "./Followers";
import Header from "../../Components/Header";

function Profile() {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

  return (
    <Grid container spacing={5} direction="row" justifyContent="center" lg={12}>
      <Grid item xs={3} spacing={2}>
        <AccountProfile />
      </Grid>
      <Grid item xs={8}>
        <Grid item>
          <Tabs value={tab} onChange={handleChange}>
            <Tab label="Geral" />
            <Tab label="Posts" />
            <Tab label="Materiais" />
          </Tabs>
          <TabPanel value={tab} index={0}>
            <Geral />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Posts />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <Materiais />
          </TabPanel>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Profile;
