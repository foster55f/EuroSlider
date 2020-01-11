import React from 'react';
import { withRouter } from 'react-router-dom';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            loggedIn: false,
            error:null
        }
    }

    goToFavorites = () => {
    this.props.history.push(`/yourfavorites`)
        // this.setState({ loggedIn: true })
        if (this.state.username === '' || this.state.passwordLength > 0) {
            this.setState({ error: 'THE USERNAME OR PASSWORD IS INCORECT' })
          }
        localStorage.setItem(this.state.username, 'key1')
    }

    render() {
        return (
            <>
            <div className='header-background'>
                <nav>
                <h2 className='header-title'>Euro Slider</h2>
                            <>
                            <input className='userName' type="text" placeholder='ENTER NAME' onChange={(event) => this.setState({ username: event.target.value })} />
                            <input className = 'password'type="text" placeholder='password' onChange={(event) => this.setState({ username: event.target.value })} />
                            {/* <input type="password" placeholder='PASSWORD' onChange={(event) => { this.setState({ password: event.target.value }); this.setState({ passwordLength: event.target.value.length }); }} />  */}
                            {/* <h1>Hello {this.state.username}</h1> */}
                            {this.state.error}
                            <button className = 'favorite-button'onClick={this.goToFavorites}> Click to Creat Your Profile</button> 
                            <button className = 'favorite-button'onClick={this.goToFavorites}> Click to View Your Favorite Highlights!</button> 
                            </>
                </nav>
            </div>
            </>
        )
    }
}

export default withRouter(Login)