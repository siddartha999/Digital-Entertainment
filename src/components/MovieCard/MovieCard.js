import React from 'react';
import './MovieCard.css';

const IMAGE_URL = `https://image.tmdb.org/t/p/w300`;
const IMAGE_PLACEHOLDER_URL = `https://www.movienewz.com/img/films/poster-holder.jpg`;

const MovieCard = (props) => {
    const poster = props.poster;
    return (
        <div className="MovieCard">
            <img src={poster ? `${IMAGE_URL}${poster}` : IMAGE_PLACEHOLDER_URL} alt={props.title} className="MovieCard-image"/>
        </div>
    );
};

export default MovieCard;