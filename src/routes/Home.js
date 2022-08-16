import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import SortByRating from "../components/SortByRating";
import styles from "../css/Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [index, setIndex] = useState("0");
    const onSelect = (event) => {
        setIndex(event.target.value);
    };
    const getMovies = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=year`)
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies()
    }, []);
    console.log(movies);

    return (
        <div className={styles.container}>
            {loading ? (
            <h1 className={styles.loading}>Loading...</h1>
            ) : (
            <div>
                <h2 className={styles.title}>🎥 Movie List</h2>
                <select value={index} onChange={onSelect}>
                    <option value="0">Sort by...</option>
                    <option value="1">Rating 🔽</option>
                    <option value="2">Year 🔽</option>
                </select>
                {index === "1" ? <SortByRating /> : null}
                {index === "2" ? <getMovies /> : null}
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
            )}
        </div>
    );
};

export default Home;