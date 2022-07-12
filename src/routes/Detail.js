import { useParams, Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import styles from "../css/Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
    setGenres(json.data.movie.genres); // TODO setGenres(movie.genres) 로는 세팅이 안됨
  }, [id]);
  useEffect(() => {
    if (id !== "" && id.length > 1) {
      getMovie();
    }
  }, [getMovie, id]); //  React Hook useEffect has missing dependencies: 'getMovie' and 'id'. Either include them or remove the dependency array  react-hooks/exhaustive-deps
  return (
    <div>
    <div>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
        ) : (
        <div className={styles.container}>
            <div className={styles.detail__img}> 
              <img
                src={movie.medium_cover_image}
                alt={movie.medium_cover_image}
              />
            </div>

            <div className={styles.detail__contents} >
              <h1 className={styles.detail__title}> {movie.title_long}</h1><br />
              <div className={styles.detail__genre}>
              <span>🎬</span>
              {genres.map((g) => (
                <span key={g}> <i>∙{g} </i> </span>
              ))}
              <span> | {movie.runtime} <i>min</i> </span>
              <span>|  ★ {movie.rating}/10</span><br />
              </div>
              <div className={styles.detail__summary}>
              <strong>Plot summary. </strong><br />
              {movie.description_full}
              </div>

              <div className={styles.detail__click}>
              <a href={movie.url}>Go for Watching in YTX.mx ←</a><br />
              <Link to={"/"} > Back to List ←  </Link>
              </div>
            </div>
            
          </div> 
        
      )}
    </div>
    </div>
  );
}

export default Detail;