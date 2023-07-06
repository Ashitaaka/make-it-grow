import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./admin.css";

const Admin = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    axios
      .get("/ideas/?fields=id,title,status")
      .then((res) => res.data)
      .then((data) => setIdeas(...[data]));
  }, []);

  const sortedIdeas =
    ideas && ideas.sort((a, b) => (a.id_status > b.id_status ? 1 : -1));

  console.log(sortedIdeas);

  return <div>{/* {ideas && ideas.map((idea) => console.log(idea))} */}</div>;
};

export default Admin;
