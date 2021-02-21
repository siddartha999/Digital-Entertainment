import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import MovieCard from "../MovieCard/MovieCard";
import "./Shows.css";
import CustomPagination from "../CustomPagination/CustomPagination";

const Shows = (props) => {
    const isMovies = props.match.path.match("movies") ? true : false;
    const [content, setContent] = useState([]);
    const pageCount = useRef(1);
    const [page, setPage] = useState(1);

    const fetchShows = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/discover/${isMovies ? "movie" : "tv"}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&page=${page}`
        );
        console.log(data);
        pageCount.current = data.total_pages || 1;
        setContent(data.results);
    };

    useEffect(() => {
        fetchShows();
    }, [page]);


    return (
        <div className="Shows">
             <div className="Shows-content-container">
                {content && content.map(item => 
                    <MovieCard 
                        key={item.id} 
                        id={item.id}
                        poster={item.poster_path}
                        title={item.title || item.name}
                        date={item.first_air_date || item.release_date}
                        media_type={item.media_type}
                        vote_average={item.vote_average}
                    />
                )}
            </div>
            <CustomPagination setPage={setPage} pageCount={pageCount.current} />
        </div>
    )
};

export default Shows;