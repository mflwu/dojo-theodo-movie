import { POSTER_URL_PREFIX } from "../../App";
import { Movie } from "../../models";
import styles from "./MoviePreview.module.css";

const MoviePreview = ({movie}:{movie:Movie}) => {
  const rating = movie.vote_average/2;
  const goToMovieDetails = () => {
    // A DEFINIR EXPERT
  };

  return <div className={styles.movieCard} onClick={goToMovieDetails}>
    <img className = {styles.moviePoster} src = {POSTER_URL_PREFIX + movie.poster_path}></img>
    <div className= {styles.movieInfo}>
      <div className={styles.movieTitle}>{movie.title}</div>
      <div className={styles.starRating}>
      {[...Array(5)].map((_, index) => (
        <span key={index} className={`${styles.stars} ${
          (index + 1 <= rating) ? styles.orange : ''
        }`} > &#9733; </span>
      ))}
      </div>
    </div>
    

  </div>
  ;
};

export default MoviePreview;
