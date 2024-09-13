import Movie from "../component/movie/Movie";

const { useState, useEffect } = require("react")

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
  
    // 최신 문법
    const getMovies = async() => {
      const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
      /*
        const json = await (
          await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
        ).json();
      */
  
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
    }
  
    useEffect(() => {
      getMovies();
    }, []);
  
    return <div>{loading ? (
    <h1>Loading...</h1>
    ) : (
      movies.map((movie) => 
        <Movie
          id={movie.id}
          coverImg={movie.medium_cover_image} 
          title={movie.title} 
          summary={movie.summary}
          genres={movie.genres} />
    ))}
    </div>
  }
  
  export default Home;