import React from 'react';
import './App.css';
import HighlightContainer from '../HighlightContainer/HighlightContainer';
import SearchHighlightContainer from '../SearchHighlightContainer/SearchHighlightContainer';
import FavoriteContainer from '../FavoriteContainer/FavoriteContainer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addGames} from '../../actions';
import { filterGames } from '../../actions';
import Login from '../../Login/Login';
import SearchForm from '../../SearchForm/SearchForm';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


export class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetch('https://www.scorebat.com/video-api/v1/')
      .then(response => response.json())
      .then(data => {
        this.props.addGames(data)
        this.props.filterGames(data)
      })
  }

  filterSearch = (search) => {
    this.props.history.push(`/yoursearch`)
    this.props.filterGames(search)
  }

  goToHomePage = () => {
    this.props.history.push(`/`)
}

  render() {
    return (
      <div className="App">
        <Route
          exact path="/"
          render={() => {
            return (
              <>
              <Login />
              <SearchForm search={this.filterSearch} />
              <SearchHighlightContainer />
              </>
            )
          }}
        />
        <Route
          exact path="/yoursearch"
          render={() => {
            return (
              <>
              <Login />  
                <Link to='/' >
                  Go Back Home
                </Link>  
              <SearchForm search={this.filterSearch} />                
              <HighlightContainer />               
              </>
            )
          }}
        />
        <Route
          exact path="/yourfavorites"
          render={() => {
            return (
              <>
              <Login />  
                <Link to='/' >
                  Go Back Home
                </Link>  
              <SearchForm search={this.filterSearch} />                
              <FavoriteContainer />               
              </>
            )
          }}
        />
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  games: state.games,
  displayGames: state.displayGames
})

export const mapDispatchToProps = dispatch => ({
  addGames: games => dispatch(addGames(games)),
  filterGames: displayGames => dispatch(filterGames(displayGames))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
