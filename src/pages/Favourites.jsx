import '../css/Favourites.css';
import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';

function Favourites() {
    const {favourites} = useMovieContext();

    if (favourites) {
        return ( 
        <div className="favourites">
            <h2>Your Favourites</h2>
            <div className="movies-grid"> 
                {favourites.map(
                    (movie) => (
                    <MovieCard movie = {movie} key = {movie.id}/>
                ))}
            </div>
        </div>
        );
    }

    return (
        <div className= "favourites-empty">
            <h2>No favourites added yet!</h2>
            <p>Go to the home page and add some movies to your favourites.</p>
        </div>
    )
}

export default Favourites