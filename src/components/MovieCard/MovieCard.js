import React from 'react';
import './MovieCard.css';
import ContentModal from "../ContentModal/ContentModal";

const IMAGE_URL = `https://image.tmdb.org/t/p/w300`;
const IMAGE_PLACEHOLDER_URL = `https://www.movienewz.com/img/films/poster-holder.jpg`;

const MovieCard = (props) => {
    const poster = props.poster;
    //console.log(props);
    return (
        <ContentModal className="MovieCard" id={props.id} mediaType={props.mediaType}>
            <img src={poster ? `${IMAGE_URL}${poster}` : IMAGE_PLACEHOLDER_URL} alt={props.title} className="MovieCard-image"/>
        </ContentModal>
    );
};

export default MovieCard;