import React, {useState} from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import {useHistory} from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({ hideButtons = false }) {
    const [, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const history = useHistory();

    const handleSearch = e => {
        e.preventDefault();
        console.log('search clicked', input);
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push('/search');
    }

    return (
        <form className='search'>
            <div className='search-input'>
                <SearchIcon className='search-input-icon' />
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>
            {!hideButtons ? (
              <div className='search-btn'>
                <Button type='submit' onClick={handleSearch} variant='outlined'>Google Search</Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
              </div>
            ) : (
              <div className='search-btn'>
                <Button className='search-btn-hidden' type='submit' onClick={handleSearch} variant='outlined'>Google Search</Button>
                <Button className='search-btn-hidden' variant='outlined'>I'm Feeling Lucky</Button>
              </div>
            )}            
        </form>
    )
}

export default Search;