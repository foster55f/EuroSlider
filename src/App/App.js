import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetch('https://www.scorebat.com/video-api/v1/')
      .then(response => response.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <></>
    )
  }
}

export default App;
