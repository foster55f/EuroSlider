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
        localStorage.setItem('key', this.state.username)
    }

    render() {
        return (
            <>
            <div className='header-background'>
                <nav>
                <h2 className='header-title'>Euro Slider</h2>
                            <>
                            <input type="text" placeholder='USERNAME' onChange={(event) => this.setState({ username: event.target.value })} />
                            {/* <input type="password" placeholder='PASSWORD' onChange={(event) => { this.setState({ password: event.target.value }); this.setState({ passwordLength: event.target.value.length }); }} />  */}
                            <h1>Hello {this.state.username}</h1>
                            {this.state.error}
                            <button onClick={this.goToFavorites}> Your Favorites!</button> 
                            </>
                </nav>
            </div>
            </>
        )
    }
}

export default withRouter(Login)