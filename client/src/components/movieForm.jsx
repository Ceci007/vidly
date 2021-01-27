import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";

class MovieForm extends Form {
    state = {  
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: "",
            movieImg: null
          },
          genres: [],
          errors: {}
    }

    schema = {
        _id: Joi.string(),
        title: Joi.string()
          .required()
          .label("Title"),
        genreId: Joi.string()
          .required()
          .label("Genre"),
        numberInStock: Joi.number()
          .required()
          .min(0)
          .max(100)
          .label("Number in Stock"),
        dailyRentalRate: Joi.number()
          .required()
          .min(0)
          .max(10)
          .label("Daily Rental Rate"),
        movieImg: Joi.string().allow("").optional()
    }

    async populateGenres() {
      const { data: genres } = await getGenres();
        this.setState({ genres });
    }

    async populateMovie() {
      try {
        const movieId = this.props.match.params.id;
        if (movieId === "new") return;

        const { data: movie } = await getMovie(movieId);
        this.setState({ data: this.mapToViewModel(movie) });
      } catch(ex) {
       if (ex.response && ex.response.status === 404) 
        this.props.history.replace("/not-found");
      }
    }

    async componentDidMount() {
        await this.populateGenres();    
        await this.populateMovie();
    }
    
      mapToViewModel(movie) {
        return {
          _id: movie._id,
          title: movie.title,
          genreId: movie.genre._id,
          numberInStock: movie.numberInStock,
          dailyRentalRate: movie.dailyRentalRate,
          movieImg: movie.movieImg
        };
    }

    doSubmit = async () => {
        await saveMovie(this.state.data);
       
        this.props.history.push("/movies");
    } 


    render() { 
        return ( 
            <div className = "container">
              <div className = "height"></div>
              <div className = "card card-login card-hidden">
              <div className = "card-header card-header-primary text-center">
                <h4>Movie Form</h4>
              </div>
              <form onSubmit={this.handleSubmit} className="group-flex">
                <div className = "card-body text-center p-4">
                {this.renderInput("title", "Title")}
                {this.renderSelect("genreId", "Genre", this.state.genres)}
                {this.renderInput("numberInStock", "Number in Stock", "number")}
                {this.renderInput("movieImg", "Insert image link")}
                {this.renderInput("dailyRentalRate", "Rate")}
                {this.renderButton("Save")}
                </div>
              </form>
            </div>        
          </div>
         );
    }
}
 
export default MovieForm;