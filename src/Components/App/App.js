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
import { withRouter } from 'react-router-dom';
import { filterGames } from '../../actions';



const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveGames('https://www.scorebat.com/video-api/v1/')
      .then(games => {
        dispatch(addGames(games))
    })
  }, []);

  const filterSearch = (search) => {
    props.history.push(`/yoursearch`)
    dispatch(filterGames(search))
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
              <SearchForm search={filterSearch}/>
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
                <SearchForm search={filterSearch} />                 
                <SearchHighlightContainer />
              </>
            )
          }}
        />
        <Route
          exact path="/yourfavorites"
          render={({ location }) => {
            return (
              <>    
                <Login />    
                  <Link to='/' >
                  Go Back Home
                  </Link>   
                <FavoriteContainer path={location.pathname}/>               
              </>              
            )
          }}
        />
      </div>
    )
  }

  export default (withRouter(App))

