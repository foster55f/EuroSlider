import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField:''
        }
    }

    handleSearch = () => {
        this.props.search(this.state.searchField.toLowerCase())
        this.setState({searchField:''})
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

export default SearchForm