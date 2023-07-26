import React, { useState } from "react";
import IdeasCardsBackground from "../components/ideas/ideasCard/IdeasCardsBackground";
import "./home.css";

const Home = () => {
  return (
    <div className="home_background">
      <IdeasCardsBackground />
    </div>
  );
};

export default Home;
