import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "../css/Home.module.css";

function SortByRating() {
    const [movies, setMovies] = useState([]);
    const getMoviesByRating = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=rating`)
        ).json();
        setMovies(json.data.movies);

    };
    useEffect(() => {
        getMoviesByRating()
    }, []);
    
    return (
        <div>
            <div>
                <div className={styles.card}>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            // key는 React.js에서만, map함수 안에서 컴포넌트들을 렌더링할 때 사용함
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title_long}
                            rating={movie.rating}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SortByRating;