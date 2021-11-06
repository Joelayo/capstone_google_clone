import React from 'react'
import '../styles/Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '../components/MicIcon';
import { Button } from '@mui/material';

function Search() {
    return (
        <for className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input />
                <MicIcon />
            </div>

            <div className='search__buttons'>
                <Button variant='outlined' type='submit'>Google Search</Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
            </div>
        </for>
    )
}

export default Search
