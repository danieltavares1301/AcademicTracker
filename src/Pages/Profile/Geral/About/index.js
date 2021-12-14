import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import "./About.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { getUserData } from "../../../../Services/authService";
import api from "../../../../Services/api";

function About() {
  const [data, setDatas] = useState({
    about: "",
  });

  useEffect(() => {
    async function loadDatas() {
      try {
        const dados = await getUserData();
        setDatas({
          about: dados.about,
        });
      } catch {
        console.log("erro");
      }
    }
    loadDatas();
    console.log(data);
  }, []);
  return (
    <>
      {[data].map((info) => {
        return (
          <CardContent>
            <h className="cardTitle">Sobre</h>
            <hr className="hrTitle" />
            <h className="hAbout">{info.about}</h>
          </CardContent>
        );
      })}
    </>
  );
}

export default About;
