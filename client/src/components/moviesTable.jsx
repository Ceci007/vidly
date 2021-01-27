import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from './common/table';
import Like from './common/like';
import auth from '../services/authService';
import "../css/Table.css";

class MoviesTable extends Component {
    columns = [
        { path: 'title', 
          label: 'Title', 
          content: movie => <Link className = "black" to = {`/movies/${movie._id}`}>{movie.title}</Link> },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        { key: 'like', 
          content: movie => 
          (<Like liked = {movie.liked} onClick = {() => this.props.onLike(movie)} />) 
        }
    ];

    deleteColumn = {
      key: 'delete',
          content: movie =>
          (<button 
            onClick = {() => this.props.onDelete(movie)}
            className = "btn btn-danger btn-sm">
              <i class="far fa-trash-alt"></i>
          </button>)
    }

    constructor() {
      super();
      const user = auth.getCurrentUser();
      if(user && user.isAdmin) {
        this.columns.push(this.deleteColumn);
      }
    }

    render() { 
        const { movies, onSort, sortColumn } = this.props;

        return ( 
            <Table 
            columns = {this.columns} 
            data = {movies} 
            onSort = {onSort}
            sortColumn = {sortColumn}
            />
         );
    }
}

 
export default MoviesTable;