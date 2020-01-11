import React from 'react';
import './App.css';
import HighlightContainer from '../HighlightContainer/HighlightContainer';
import SearchHighlightContainer from '../SearchHighlightContainer/SearchHighlightContainer';
import UserContainer from '../UserContainer/UserContainer';
import FavoriteContainer from '../FavoriteContainer/FavoriteContainer';
import UserFavoriteContainer from '../UserFavoriteContainer/UserFavoriteContainer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addGames } from '../../actions';
import { addUser} from '../../actions';
import { filterGames } from '../../actions';
import Login from '../../Login/Login';
import SearchForm from '../../SearchForm/SearchForm';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { retrieveGames } from '../../fetchcalls';




export class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    retrieveGames('https://www.scorebat.com/video-api/v1/')
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
        exact path={`/${this.props.user.name}favorites`}
        render={() => {
          return (
            <>
            <Login />  
              <UserContainer /> 
              <UserFavoriteContainer />               
            </>
          )
        }}
      />
        <Route
          exact path={`/${this.props.user.name}`}
          render={() => {
            return (
              <>
              <Login />  
                <UserContainer /> 
              <SearchHighlightContainer />
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
  user: state.user,
  games: state.games,
  displayGames: state.displayGames,

})

export const mapDispatchToProps = dispatch => ({
  addGames: games => dispatch(addGames(games)),
  filterGames: displayGames => dispatch(filterGames(displayGames)),
  addUser: user => dispatch(addUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))

