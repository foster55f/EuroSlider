import React from 'react';
import { filterGames } from '../actions';
import { connect } from 'react-redux';


class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField: '',
            foundGames: []
        }
    }

    handleSearch = (event) => {
        event.preventDefault()
        const foundGamesArray = this.props.games.filter(game => {
            return game.title.toLowerCase().includes(this.state.searchField.toLowerCase())|| game.title.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        this.props.search(foundGamesArray)
        this.setState({ searchField: '' })
    }
    render() {
        return (
            <header>
            <h1>Search for Highlights</h1>
            <div className='searchContainer'>   
                <input
                    type='text'
                    placeholder='Search'
                    name='title'
                    onChange={event => this.setState({ searchField: event.target.value })}
                    value={this.state.searchField}
                />
                <button onClick={this.handleSearch} className="searchButton">Search</button>
            </div>
        </header>
        )
    }
}

export const mapStateToProps = (state) => ({
    games: state.games,
  })
  
  export const mapDispatchToProps = dispatch => ({
    filterGames: games => dispatch( filterGames(games) )
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)