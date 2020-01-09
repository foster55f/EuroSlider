import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password:'',
            loggedIn: false
        }
    }

    login = () => {
        this.setState({loggedIn:true})
    }
    render() {
        return (
            <>
            <div className='header-background'>
                <nav>
                <h2 className='header-title'>Euro Slider</h2>
                        <button onClick={this.login}> YourEuroTeam login</button>
                        {this.state.loggedIn && 
                            <>
                            <input type="text" placeholder='USERNAME'onChange={(event) => this.setState({username:event.target.value})}/>
                            <input type="password" placeholder='PASSWORD' onChange={(event) => { this.setState({ password: event.target.value }) }}/>                            
                            </>
                        }
                </nav>
            </div>
            </>
        )
    }
}

export default Login