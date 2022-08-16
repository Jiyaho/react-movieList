import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Link 컴포넌트: 브라우저 새로고침(페이지 전체 렌더링)없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
import styles from "../css/Movie.module.css";

function Movie({ id, coverImg, title, summary, genres, rating }) {
    // Movie component는 위 속성들(properties)을 다 부모 component로부터 받아온다
    function onClick () {
        alert("Added to your list!");
    };
    return (
        <div className={styles.container}>
            <span>
                <Link className={styles.likeBtn} onClick={onClick} to={`/like`}>📌</Link>
            </span>
            <img src={coverImg} className={styles.poster} />
            <div className={styles.titleR}>
                <h2>
                    <Link className={styles.title} to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3>📊rating: {rating}</h3>
            </div>
            <div className={styles.summaryG}>
                <p>{summary.slice(0,150)+"..."}</p>
                {genres.map((g) => (
                    <span>{"#" + g + " "}</span>
                ))}
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;