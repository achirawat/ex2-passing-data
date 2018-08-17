import React, {Component} from 'react'

class Movies extends Component {

    render() {
        const {movies, users, userLikeMovies} = this.props;
        // console.log(userLikeMovies);
        return(
            <li key={movies.id}>
                <h2>{movies.name}</h2>
                <p>Liked By:</p>
                { userLikeMovies.length === 0 ?
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

export default Movies