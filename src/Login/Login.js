import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: [],
            password: '',
            passwordLength:'',
            loggedIn: false,
            error:null
        }
    }

    // login = () => {
    //     // this.setState({ loggedIn: true })
    //     if (this.state.username === '' || this.state.passwordLength > 0) {
    //         this.setState({ error: 'THE USERNAME OR PASSWORD IS INCORECT' })
    //       }
    //     localStorage.setItem("test1", this.state.username[0])
    //     localStorage.getItem("test1", this.state.username)

    // }

    // userLogin(id) {
    // }

    render() {
        return (
            <>
            <div className='header-background'>
                <nav>
                <h2 className='header-title'>Euro Slider</h2>
                            <>
                            <button onClick={this.login}> YourEuroTeam login</button> 
                            </>
                </nav>
            </div>
            </>
        )
    }
}

export default Login