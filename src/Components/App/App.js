import React from 'react';
import './App.css';
import HighlightContainer from '../HighlightContainer/HighlightContainer';
import { connect } from 'react-redux';
import { addGames } from '../../actions';



class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('hii')
    fetch('https://www.scorebat.com/video-api/v1/')
      .then(response => response.json())
      .then(data => {
        this.props.addGames(data)
      })
  }

  render() {
    console.log(this.props)
    return (
      <>
        <HighlightContainer />
      </>
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

