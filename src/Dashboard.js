import React, { Component } from "react";
import Movies from "./Movies";

class Dashboard extends Component {
    render() {
        const {users, movies, userLikeMovies} = this.props;
        const movieCards = Object.keys(movies).map(id => (
            <Movies key={id} users={users} userLikeMovies={userLikeMovies[id]} movieInfo={movies[id]} />
        ));
        return <ul>{movieCards}</ul>;
    }
}

export default Dashboard;