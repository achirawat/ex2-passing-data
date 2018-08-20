import React, {Component} from 'react'

class Movies extends Component {

    render() {
        const {movieInfo, users, userLikeMovies} = this.props;
        return(
            <li key={movieInfo.id}>
                <h2>{movieInfo.name}</h2>
                <p>Liked By:</p>
                { !userLikeMovies || userLikeMovies.length === 0 ?
                    (<p>None of the current users liked this movie</p>) :
                    (<ul>
                        {userLikeMovies.map(userID => {
                            return (
                                <li key={userID}>
                                    <p>{users[userID].name}</p>
                                </li>
                            );
                        })}

                    </ul>)
                }
            </li>
        );
    }
}

export default Movies;