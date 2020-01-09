import React from 'react';
import './App.css';
import HighlightContainer from '../HighlightContainer/HighlightContainer';
import { connect } from 'react-redux';
import { addGames } from '../../actions';
import Login from '../../Login/Login';



export class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetch('https://www.scorebat.com/video-api/v1/')
      .then(response => response.json())
      .then(data => {
        this.props.addGames(data)
      })
  }

  render() {
    return (
      <div className="App">
        <Login />
        <HighlightContainer />
        </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  games: state.games,
})

export const mapDispatchToProps = dispatch => ({
  addGames: games => dispatch( addGames(games) )
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

