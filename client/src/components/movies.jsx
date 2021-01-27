import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { getMovies, deleteMovie } from '../services/movieService';
import MoviesTable from './moviesTable';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getGenres } from '../services/genreService';
import { paginate } from '../utils/paginate';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import SearchBox from "./searchbox";

class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        searchQuery: "",
        selectedGenre: null,
        sortColumn: { path: 'title', order: 'asc' }
    }

    async componentDidMount() {
        const { data } = await getGenres();
        const genres = [{ _id: "", name: "All Genres" }, ...data];

        const { data: movies } = await getMovies();
        this.setState({ movies, genres });
    }

    handleDelete = async (movie) => {
        const originalMovies = this.state.movies;
        const movies = originalMovies.filter(m => m._id !== movie._id);
        this.setState({ movies });

        try {
            await deleteMovie(movie._id);
        } catch(ex) {
            if(ex.response && ex.response.status === 404) {
                toast.error("This movie has already been deleted.");

                this.setState({ movies: originalMovies });
            }
        }
    }

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
    }

    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
    }

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    }

    getPagedData = () => {
        const { 
            pageSize, 
            currentPage, 
            sortColumn, 
            selectedGenre, 
            searchQuery,
            movies: allMovies } = this.state;

        let filtered = allMovies;
        if (searchQuery)
            filtered = allMovies.filter(m =>
            m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        else if (selectedGenre && selectedGenre._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: movies };
    }

    render() { 
        const { user } = this.props;
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

        const { totalCount, data: movies } = this.getPagedData();

        return ( 
            <div className = "row d-flex justify-content-center">
                <div className="col-md-3 col-sm-12">
                    <div className = "center">
                        <ListGroup 
                        items = {this.state.genres} 
                        selectedItem = {this.state.selectedGenre}
                        onItemSelect = {this.handleGenreSelect} 
                        />
                    </div>
                </div>
                <div className="col-md-9 col-sm-12">
                <div className = "center">
                {user && <Link to = "/movies/new"
                className = "btn btn-primary btn-round px-4 my-3"
                >New Movie</Link>}
                </div>
                <div className = "center margin">
                <p>Showing {totalCount} movies in the database.</p>
                <SearchBox value={searchQuery} onChange={this.handleSearch} />
                <MoviesTable 
                movies = {movies} 
                sortColumn = {sortColumn}
                onLike = {this.handleLike} 
                onDelete = {this.handleDelete} 
                onSort = {this.handleSort}
                />
                <Pagination 
                itemsCount = {totalCount} 
                pageSize = {pageSize} 
                currentPage = {currentPage}
                onPageChange = {this.handlePageChange}
                />
                </div>
                </div>
            </div>
         );
    }
}
 
export default Movies;