import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            passwordLength:'',
            loggedIn: false,
            error:null
        }
    }

    login = () => {
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
                            <input type="password" placeholder='PASSWORD' onChange={(event) => { this.setState({ password: event.target.value }); this.setState({ passwordLength: event.target.value.length }); }} />  
                            {this.state.error}
                            <button onClick={this.login}> YourEuroTeam login</button> 
                            </>
                </nav>
            </div>
            </>
        )
    }
}

export default Login