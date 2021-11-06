<<<<<<< HEAD
import React from 'react'
import '../styles/Home.css'
import Search from '../components/Search';
import {Link} from 'react-router-dom';
import { Avatar } from '@mui/material';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';

function Home() {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className='home__headerLeft'>
                </div>
                <div className='home__headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/gmail'>Images</Link>
                    <AppsRoundedIcon />
                    <Avatar />
                </div>
            </div>
            <div className='home__body'>
                <img 
                    src='https://internship.sidehustle.ng/img/logo-dark.64d45129.png' 
                    alt='logo' 
                />
                <div className='home__inputContainer'>
                    <Search />
                </div>
            </div>
=======
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
>>>>>>> 8de156b69cfe72d45f02ce62c486f093da6f0347
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
