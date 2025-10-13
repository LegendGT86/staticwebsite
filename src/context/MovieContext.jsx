import {createContext, useState, useEffect, useContext} from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);
export const MovieProvider = ({children}) => {
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favourites")
        if (storedFavs) setFavourites (JSON.parse(storedFavs));
        }, []);

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    return <MovieContext.Provider> 
        {children}
         </MovieContext.Provider>
}