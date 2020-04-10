import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser, userLogIn } from '../../actions';
import PropTypes from 'prop-types';



export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            loggedIn: false,
            error:null
        }
    }

    goToFavorites = () => {
    this.props.history.push(`/yourfavorites`)
        if (this.state.username === '' || this.state.passwordLength > 0) {
            this.setState({ error: 'THE USERNAME OR PASSWORD IS INCORECT' })
        }
    }

    goToUserFavorites = () => {
        this.props.history.push("user/favorites")
            // this.setState({ loggedIn: true })
            if (this.state.username === '' || this.state.passwordLength > 0) {
                this.setState({ error: 'THE USERNAME OR PASSWORD IS INCORECT' })
        }
    }   

    createUser = () => {
        const name = {
            name: this.state.username,
        }
        const log = true
        this.props.addUser(name)
        this.props.userLogIn()
        localStorage.setItem(this.state.username, 'key1')
        this.props.history.push("/user")
        this.setState({ loggedIn: true })
        let password = localStorage.getItem(this.state.username)
    }

    render() {
        return (
            <>
            <div className='header-background'>
                <nav>
                <h2 className='header-title'>Euro Slider</h2>
                        <>
                            <div className = 'user-entry'>
                            <input className='userName' type="text" placeholder='ENTER NAME' onChange={(event) => this.setState({ username: event.target.value })} />
                            {/* <input className = 'password'type="text" placeholder='password' onChange={(event) => this.setState({ password: event.target.value })} /> */}
                            {/* <input type="password" placeholder='PASSWORD' onChange={(event) => { this.setState({ password: event.target.value }); this.setState({ passwordLength: event.target.value.length }); }} />  */}
                            {/* <h1>Hello {this.state.username}</h1> */}
                            {this.state.error}
                                <button className='create-user-button' onClick={this.createUser}> Login</button> 
                            </div>
                            {this.props.userLog &&
                                <button className='favorite-button' onClick={this.goToUserFavorites}> {`Click to View ${this.props.user.name} Favorite Highlights!`}</button>
                            }
                            {!this.props.userLog &&
                                <button className='favorite-button' onClick={this.goToFavorites}> Click to View Your Favorite Highlights!</button>
                            }
                            </>
                </nav>
            </div>
            </>
        )
    }
}

export const mapStateToProps = state => ({
    user: state.user,
    userLog: state.userLog
})

export const mapDispatchToProps = (dispatch) => ({
    addUser: user => dispatch(addUser(user)),
    userLogIn: loggedIn => dispatch(userLogIn(loggedIn))

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))

Login.propTypes = {
    user: PropTypes.object,
    userLog: PropTypes.bool,
    addUser: PropTypes.func,
    userLogIn: PropTypes.func,
}