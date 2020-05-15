import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


const Login = (props) => {

const goToFavorites = () => {
    props.history.push(`/yourfavorites`)
    }  

        return (
            <>
            <div className='header-background'>
                <nav>
                <h2 className='header-title'>Euro Slider</h2>
                        <>
                            <button className='favorite-button' onClick={goToFavorites}> Click to View Your Favorite Highlights!</button>
                        </>
                </nav>
            </div>
            </>
        )
    }

export default (withRouter(Login))

Login.propTypes = {
    user: PropTypes.object,
    userLog: PropTypes.bool,
    addUser: PropTypes.func,
    userLogIn: PropTypes.func,
}