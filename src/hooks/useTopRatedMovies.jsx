import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export default function useTopRatedMovies(){
    const dispatch = useDispatch();

    const nowTopRatedMovies = useSelector((store)=>store.movies.topRatedMovies);
    
    const getTopRatedMovies = async ()=>{
        const topRated = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTIONS);
        const movies = await topRated.json();
        dispatch(addTopRatedMovies(movies.results));
    };

    useEffect(()=>{
        !nowTopRatedMovies && getTopRatedMovies()
    },[]);
}