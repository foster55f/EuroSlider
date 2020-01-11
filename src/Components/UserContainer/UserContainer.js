import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userLogOut} from '../../actions';





class UserContainer extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }   

    logOut = () => {
        this.props.userLogOut()
        this.props.history.push('/')
        
    }

    render() {
        return (
            <>
                <h1>{`Welcome ${this.props.user.name}`}</h1>
                <button onClick ={this.logOut}>Log Out</button>
            </>
        )
    }
}
export const mapStateToProps = state => ({
    user: state.user,
    userLog: state.userLog
})

export const mapDispatchToProps = dispatch => ({
    userLogOut: loggedIn => dispatch(userLogOut(loggedIn))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserContainer))
