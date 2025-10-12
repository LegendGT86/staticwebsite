import '../css/MovieCard.css';
function MovieCard({movie}) {

    function onFavouriteClick() {
        alert("clicked") 
    }    
        
    //To avoid conflict with the global css we can use className instead of class
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favourite-btn" onClick={onFavouriteClick}>
                    &#9733;
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>

    </div>
}

export default MovieCard