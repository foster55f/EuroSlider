import React from 'react';
import { connect } from 'react-redux';
import { addFavoriteGames} from '../../actions';
import { addUserFavoriteGames } from '../../actions';
import { removeGames } from '../../actions';
import { removeUserGames } from '../../actions';


export class HighlightCard extends React.Component {
    constructor(props) {
        super(props);
    }

    pickFavoriteVideos = (id) => {
        const favorite = this.props.games.find(game => {
            return game.title === id
        })
        this.props.addFavoriteGames(favorite)
    }

    userPickFavoriteVideos = (id) => {
        const favorite = this.props.games.find(game => {
            return game.title === id
        })
        this.props.addUserFavoriteGames(favorite)
    }

    removeFavoriteVideos = (id) => {
        const videoToRemove = this.props.games.find(game => {
            return game.title === id
        })
        this.props.removeGames(videoToRemove)
    }

    removeUserFavoriteVideos = (id) => {
        const videoToRemove = this.props.games.find(game => {
            return game.title === id
        })
        this.props.removeUserGames(videoToRemove)
    }

    render() {
        return (
            <article className='game-card'>
                <h1 className='title-font'>{this.props.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: `${this.props.embed}` }} />  
                {this.props.userLog &&
                    <button className='share-button' id={this.props.title} onClick={event => this.userPickFavoriteVideos(event.target.id)}>{`Add to ${this.props.user.name}`}</button>
                }
                {!this.props.userLog &&
                    <button className='share-button' id={this.props.title} onClick = {event => this.pickFavoriteVideos(event.target.id)}>Add Favorite</button>                    
                } 
                {this.props.userLog &&
                    <button className='remove-button' id={this.props.title} onClick = {event => this.removeUserFavoriteVideos(event.target.id)}>Remove Your Favorite </button>
                }
                {!this.props.userLog &&
                    <button className='remove-button' id={this.props.title} onClick = {event => this.removeFavoriteVideos(event.target.id)}>Remove </button>
                }              
            </article>
        )
    }
}
export const mapStateToProps = (state) => ({
    user: state.user,
    games: state.games,
    favoriteGames: state.favoriteGames,
    userLog: state.userLog,
  })

export const mapDispatchToProps = dispatch => ({
    addFavoriteGames: favoriteGames => dispatch(addFavoriteGames(favoriteGames)),
    addUserFavoriteGames: userFavoriteGames => dispatch(addUserFavoriteGames(userFavoriteGames)),
    removeGames: removeFavoriteVideos => dispatch(removeGames(removeFavoriteVideos)),
    removeUserGames: removeUserFavoriteVideos => dispatch(removeUserGames(removeUserFavoriteVideos))

  })

export default connect(mapStateToProps, mapDispatchToProps)(HighlightCard)
