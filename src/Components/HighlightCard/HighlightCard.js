import React from 'react';
import { connect } from 'react-redux';
import { addFavoriteGames} from '../../actions';
import { addUserFavoriteGames } from '../../actions';


class HighlightCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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

    render() {
        return (
            <article className='game-card'>
                <h1 className='title-font'>{this.props.title.toUpperCase()}</h1>
                <div dangerouslySetInnerHTML={{ __html: `${this.props.embed}` }} />  
                {this.props.userLog &&
                    <button className='share-button' id={this.props.title} onClick = {event => this.userPickFavoriteVideos(event.target.id)}>Add to your saved Highlights</button>
                            }
                {!this.props.userLog &&
                    <button className='share-button' id={this.props.title} onClick = {event => this.pickFavoriteVideos(event.target.id)}>Click to Add Favorite Highlight</button>                    
                }
            </article>
        )
    }
}
export const mapStateToProps = (state) => ({
    games: state.games,
    userLog: state.userLog,
  })

export const mapDispatchToProps = dispatch => ({
    addFavoriteGames: favoriteGames => dispatch(addFavoriteGames(favoriteGames)),
    addUserFavoriteGames: userFavoriteGames => dispatch(addUserFavoriteGames(userFavoriteGames))
  })

export default connect(mapStateToProps, mapDispatchToProps)(HighlightCard)
