import PropTypes from "prop-types";
import styles from "../css/Detail.module.css";

function DetailMovie({ id, coverImg, title, descriptionFull, genres }) {
    // Movie component는 위 속성들(properties)을 다 부모 component로부터 받아온다
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.poster} src={coverImg} />
            </div>
            <div className={styles.desContainer}>
                <h2 className={styles.title}>{title}</h2>
                <p>{descriptionFull}</p>
                <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
                </ul>
            </div>
        </div>
    );
}

DetailMovie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DetailMovie;