import React from 'react'
import './Home.css'
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
        </div>
    );
}

export default Home;
