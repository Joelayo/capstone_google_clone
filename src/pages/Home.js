import React from "react";
import "../styles/Home.css";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import Footer from "./Footer";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft"></div>
        <div className="home__headerRight">
          <Link to="/">Gmail</Link>
          <Link to="/">Images</Link>
          <AppsRoundedIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
