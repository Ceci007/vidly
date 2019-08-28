import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
    render() { 
        const { title, movieImg, genre, _id } = this.props.movie;

        return ( 
            <article>
                <div className="card my-4">
                    {movieImg ? <img src = {`public/${movieImg}`} 
                    width = "920" height = "524" alt = "" className = "img-fluid card-img-top" /> :
                    <img src = "./default-image.jpg"
                        width = "920" height = "524" alt = "" className = "img-fluid card-img-top" />}        
                    <div className="card-body text-center">
                        <h5>{title}</h5>
                        <p>{genre.name}</p>
                    </div>
                    <Link to = {`/movies/${_id}`} className="btn btn-primary mb-3 width">
                        Change Image
                    </Link>
                </div>
            </article>
         );
    }
}
 
export default MovieCard;