import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import "./Skills.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Skills() {
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
      <h className="cardTitle">Habilidades e Competências</h>
      <hr className="hrTitle" />
      {data.map((info) => {
        return (
          <div>
            {info.skills.map((item) => {
              return (
                <div key={item.idSkill}>
                  <h className="hSkills">{item.skill}</h>
                  {cond(info.skills)}
                </div>
              );
            })}
          </div>
        );
      })}
    </CardContent>
  );
}
export default Skills;
