import React from "react";
import { CardContent, Avatar, Typography, Grid } from "@material-ui/core";
import "./Experiences.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Experiences() {
  const [data, setDatas] = useState([]);

  useEffect(() => {
    async function loadDatas() {
      const response = await axios.get(
        "https://raw.githubusercontent.com/profsergiocosta/data/main/overview.json"
      );
      setDatas(response.data);
    }
    loadDatas();
  }, []);

  function cond(item) {
    var lista = [];
    for (var i in item) {
      lista.push(i);
    }
    if (lista.length > 1) {
      return <hr className="hr" />;
    }
  }
  return (
    <CardContent>
      <h className="cardTitle">Experiências</h>
      <hr className="hrTitle" />
      {data.map((info) => {
        return (
          <div>
            {info.experiences.map((item) => {
              return (
                <div>
                  <Grid className="gridExperiences" key={item.idExperience}>
                    <Avatar
                      className="gridAvatarCompany"
                      aria-label="recipe"
                      src={item.pictureCompany}
                    />
                    <h className="gridOccupation">{item.occupation}</h>
                    <h className="gridCompany">{item.company}</h>
                    <h className="gridDate">{`${item.startDate} - ${item.endDate}`}</h>
                    <h className="gridPlace">{item.place}</h>
                  </Grid>
                  {cond(info.experiences)}
                </div>
              );
            })}
          </div>
        );
      })}
    </CardContent>
  );
}
export default Experiences;
