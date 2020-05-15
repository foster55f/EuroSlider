import './App.css';
import HighlightContainer from '../HighlightContainer/HighlightContainer';
import SearchHighlightContainer from '../SearchHighlightContainer/SearchHighlightContainer';
import FavoriteContainer from '../FavoriteContainer/FavoriteContainer';
import { addGames } from '../../actions';
import Login from '../Login/Login';
import SearchForm from '../SearchForm/SearchForm';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { retrieveGames } from '../../fetchcalls';
import { useDispatch} from 'react-redux';
import React, { useEffect } from 'react';



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveGames('https://www.scorebat.com/video-api/v1/')
      .then(games => {
        dispatch(addGames(games))
    })
  }, []);

  const filterSearch = (search) => {
    this.props.history.push(`/yoursearch`)
    this.props.filterGames(search)
  }

  const goToHomePage = () => {
    this.props.history.push(`/`)
}

    return (
      <div className="App">
        <Route
          exact path="/"
          render={() => {
            return (
              <>
              <Login />
                {/* <SearchForm search={this.filterSearch} /> */}
              <HighlightContainer />                
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
                <FavoriteContainer />               
              </>              
            )
          }}
        />
      </div>
    )
  }

export default App

