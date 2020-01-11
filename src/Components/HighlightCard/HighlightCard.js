import React from 'react';
import { connect } from 'react-redux';
import { addFavoriteGames} from '../../actions';




class HighlightCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    pickFavoriteVideos = (id) => {
        console.log(id)
        const favorite = this.props.games.find(game => {
            return game.title === id
        })
        this.props.addFavoriteGames(favorite)
    }

    render() {
        return (
            <article className='game-card'>
                <h1 className='title-font'>{this.props.title.toUpperCase()}</h1>
                {/* <div dangerouslySetInnerHTML={{ __html: `${this.props.embed}` }} />   */}
                <button className='share-button' id={this.props.title} onClick = {event => this.pickFavoriteVideos(event.target.id)}>Save Highlight</button>
            </article>
        )
    }
}

export const mapStateToProps = (state) => ({
    games: state.games,
  })

export const mapDispatchToProps = dispatch => ({
  addFavoriteGames: favoriteGames => dispatch(addFavoriteGames(favoriteGames))
  })

export default connect(mapStateToProps, mapDispatchToProps)(HighlightCard)
