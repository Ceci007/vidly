import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../css/MovieCard.css";

class MovieCard extends Component {
    render() { 
        const { title, movieImg, genre, _id } = this.props.movie;

        return ( 
            <article>
                <div className="card my-4">
                    {movieImg !== "" ? 
                    <div className="image-box">
                        <img src = {`${movieImg}`} 
                         alt = "" className = "card-img-top" />
                    </div>
                    :
                    <div className="image-box">
                        <img src = "./default-image.jpg"
                        alt = "" className = "card-img-top" />
                    </div>}        
                    <div className="card-body text-center">
                        <h5>{title}</h5>
                        <p>{genre.name}</p>
                    </div>
                    {/*<Link to = {`/movies/${_id}`} className="btn btn-primary mb-3 width">
                        Change Image
                    </Link>*/}
                </div>
            </article>
         );
    }
}
 
export default MovieCard;