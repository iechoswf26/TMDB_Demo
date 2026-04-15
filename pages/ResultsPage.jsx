import {useEffect, useState} from "react";
import MovieCard from '../src/components/MovieCard.jsx'

const ResultsPage = () => {

    const [movies, setMovies] = useState ([])
    const [searchMovies, setSearchMovies] = useState("")

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
        }
    };

    useEffect(() => {


            fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
                .then(res => res.json())
                .then(parsedResponse => {
                    console.log(parsedResponse.results)
                    setMovies(parsedResponse.results)
                })

                .catch(err => console.error(err));

    },
        [])

    const handleChange = (evt) => {
        setSearchMovies(evt.target.value)
        console.log(searchMovies)
        fetch(`https://api.themoviedb.org/3/search/movie?query=${searchMovies}&include_adult=false&language=en-US&page=1`, options)
            .then(res => res.json())
            .then(parsedResponse => {
                console.log(parsedResponse.results)
                setMovies(parsedResponse.results)
            })

            .catch(err => console.error(err));
    }

    let displayMovies = movies.map((el,index) => {
        return (
            <MovieCard key={el.id} data={el}/>
        )
    })

    return (
        <div>
            <h2>Results Page</h2>
            <form action="">
                <label>
                    <input
                        type="text"
                        placeholder={"Enter movie search..."}
                        onChange={handleChange}
                        value={searchMovies}
                    />
                </label>
                <button type={"submit"}>Submit</button>
            </form>
            {displayMovies}






        </div>
    )
}

export default ResultsPage;