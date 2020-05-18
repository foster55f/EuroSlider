import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector} from 'react-redux';



const Login = (props) => {
    const favoriteGames = useSelector(state => state.favoriteGames);


    const goToFavorites = () => {
        props.history.push(`/yourfavorites`)
    }  
        return (
            <div className='header-background'>
                <nav>
                <h2 className='header-title'>Euro Slider</h2>
                        <div className='header-favorite'>
                            <button className='favorite-button' onClick={goToFavorites}>View {favoriteGames.length} favorited Highlights!</button>
                        </div>
                </nav>
            </div>
        )
    }

export default (withRouter(Login))

Login.propTypes = {
    user: PropTypes.object,
    userLog: PropTypes.bool,
    addUser: PropTypes.func,
    userLogIn: PropTypes.func,
}