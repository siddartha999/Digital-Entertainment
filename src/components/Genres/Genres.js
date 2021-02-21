import React, { useEffect} from 'react';
import { Chip } from "@material-ui/core";
import axios from "axios";
import "./Genres.css";

const Genres = (props) => {
    /**
     * Function to fetch all the genres for the given type: Movies/Tv Shows.
     */
    const fetchGenres = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/genre/${props.isMovies ? "movie" : "tv"}/list?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`
        );
        props.setGenres(data.genres);
      };

      /**
       * Function to filter the results w.r.t the selected genre.
       */
      const handleAdd = (genre) => {
        props.setSelectedGenres(new Set([...props.selectedGenres, genre.id - 0]));
        props.setPage(1);
      };

      /**
       * Function to remove the filter w.r.t the selected genre.
       */
      const handleRemove = (genre) => {
        props.selectedGenres.delete(genre.id - 0);
        props.setSelectedGenres(new Set([...props.selectedGenres]));
        props.setPage(1);
      };

      useEffect(() => {
        fetchGenres();
         // eslint-disable-next-line
      }, []);
    
    return (
        <div className="Genres">
              {props.genres.map((genre) => (
                <Chip label={genre.name} key={genre.id} id={genre.id} color={`${props.selectedGenres?.has(genre.id) ? "secondary" : "default"}`} 
                    clickable size="small" className="Genres-chip"
                    onClick={() => handleAdd(genre)} onDelete={() => handleRemove(genre)} />
            ))}
        </div>
    );
};

export default Genres;