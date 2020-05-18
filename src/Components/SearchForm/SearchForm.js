import React, { useState } from 'react';
import PropTypes from 'prop-types';
import App from '../App/App';
import { useSelector, useDispatch} from 'react-redux';


const SearchForm = (props) => {
    const games = useSelector(state => state.games);
    const [state, setState] = useState({foundGames:[], searchField:''});

    const handleSearch = (event) => {
        event.preventDefault()
        const foundGamesArray = games.filter(game => {
            return game.title.toLowerCase().includes(state.searchField.toLowerCase())|| game.title.toLowerCase().includes(state.searchField.toLowerCase())
        })
        props.search(foundGamesArray)
        setState({ searchField: '' })
    }

        return (
            <header>
            <div className='searchContainer'>   
                <input
                    className ='search-input'
                    type='text'
                    placeholder='Search For Highlights'
                    name='title'
                    onChange={event => setState({ searchField: event.target.value })}
                    value={state.searchField}
                    />
                    <div className='search-div'>
                        <button onClick={handleSearch} className="searchButton">Search</button>
                    </div>
                    
            </div>
        </header>
        )
    }


export default SearchForm

SearchForm.propTypes = {
    games: PropTypes.object,
}