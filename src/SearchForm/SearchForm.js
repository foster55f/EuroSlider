import React from 'react';

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            searchField:''
        }
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
                    onChange={event => this.handleChange(event)}
                    value={this.state.searchField}
                />
                <button onClick={this.handleSearch} className="searchButton">Search</button>
            </div>
        </header>
        )
    }
}

export default SearchForm