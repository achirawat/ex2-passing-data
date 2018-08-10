import React, {Component} from 'react'

class Movies extends Component {
    render() {
        const {movies, users, profiles} = this.props
        return(
            <li key={movies.id}>
                <h2>{movies.name}</h2>
                <p>Liked By:</p>
                { xxx.length === 0 ?
                    (<p>None of the current users liked this movie</p>) :
                    (<ul>
                        <li key={profiles.favoriteMovieID}>
                            <p>{users[profiles.userID].name}</p>
                        </li>
                    </ul>)
                }
            </li>
        );
    }
}

export default Movies