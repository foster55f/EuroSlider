import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser} from '../actions';



class Login extends React.Component {
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
        // this.setState({ loggedIn: true })
        if (this.state.username === '' || this.state.passwordLength > 0) {
            this.setState({ error: 'THE USERNAME OR PASSWORD IS INCORECT' })
          }
        localStorage.setItem(this.state.username, 'key1')
    }

    createUser = () => {
        const user = {
            name: this.state.username,
        }
        this.props.addUser(user)
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
                            <button className = 'create-user-button'onClick={this.createUser}> Click to Creat Your Profile</button> 
                            <button className = 'favorite-button'onClick={this.goToFavorites}> Click to View Your Favorite Highlights!</button> 
                            </>
                </nav>
            </div>
            </>
        )
    }
}

export const mapStateToProps = state => ({
    user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
    addUser: user => dispatch(addUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))