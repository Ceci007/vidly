import React, { Component } from 'react';
import MovieCard from '../components/movieCard';
import { getMovies } from '../services/movieService'; 

class MovieCardList extends Component {
    state = { movies: [] }

    async componentDidMount() {
        const { data: movies } = await getMovies();
        this.setState({ movies })
    }

    render() { 
        const { movies } = this.state;

        return ( 
            <section>
                <div className="row">
                {movies.map(movie => {
                    return (
                        <div key = {movie._id} className="col-md-4 col-sm-12">
                            <MovieCard 
                                key = {movie._id}
                                movie = {movie}
                            />
                        </div>
                    );
                })}
                </div>
            </section>
         );
    }
}
 
export default MovieCardList;