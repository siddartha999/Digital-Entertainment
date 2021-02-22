import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';
import MovieCard from "../MovieCard/MovieCard";
import "./Trending.css";
import CustomPagination from "../CustomPagination/CustomPagination";

const Trending = () => {
    const [content, setContent] = useState([]);
    const pageCount = useRef(1);
    const [page, setPage] = useState(1);

    const fetchTrendingItems = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&page=${page}`
        );
        console.log(data);
        pageCount.current = data.total_pages || 1;
        setContent(data.results);
    };

    useEffect(() => {
        fetchTrendingItems();
    }, [page]);

    return (
        <div className="Trending">
            <div className="Trending-content-container">
                {content && content.map(item => 
                    <MovieCard 
                        key={item.id} 
                        id={item.id}
                        poster={item.poster_path}
                        title={item.title || item.name}
                        date={item.first_air_date || item.release_date}
                        mediaType={item.media_type}
                        voteAverage={item.vote_average}
                    />
                )}
            </div>
            <CustomPagination setPage={setPage} pageCount={pageCount.current} page={page} />
        </div>
    );
};

export default Trending;
