import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "../css/Movie.module.css";

function Movie({id,coverImg, title, summary, genres}) {

  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}>
      <img className={styles.movie__img} src={coverImg} alt={title} />
      </Link>
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        
        {genres.map(g=> <span className={styles.movie__genres} key={g}> <i>{g}</i> </span>)}
        <p className={styles.movie__summary} >{summary.length > 200 ? `${summary.slice(0,235)}...` : summary}</p>
        <Link to={`/movie/${id}`} className={styles.movie__click}><h4> <i>Click here for details 🐻</i> </h4></Link>
      </div>
    </div>
  )}

  Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default Movie;