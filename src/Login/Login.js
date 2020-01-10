import React from 'react';
import { withRouter } from 'react-router-dom';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    login = () => {
    this.props.history.push(`/yourFavorites`)
        // this.setState({ loggedIn: true })
        // if (this.state.username === '' || this.state.passwordLength > 0) {
        //     this.setState({ error: 'THE USERNAME OR PASSWORD IS INCORECT' })
        //   }
        // localStorage.setItem("test1", this.state.username[0])
        // localStorage.getItem("test1", this.state.username)
    }

    render() {
        return (
            <>
            <div className='header-background'>
                <nav>
                <h2 className='header-title'>Euro Slider</h2>
                            <>
                            <button onClick={this.login}> Euro Vids To Share With Friends!</button> 
                            </>
                </nav>
            </div>
            </>
        )
    }
}

export default withRouter(Login)