import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import sidehustle from "../sidehustle.png";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/gmail">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img src={sidehustle} className="App-logo" alt="logo" width="500px" />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
