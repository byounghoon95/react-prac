import Movie from "./Movie";
import { useParams } from "react-router-dom";

const { useState, useEffect } = require("react")


const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const {id} = useParams();

  // 최신 문법
  const getMovieDetail = async() => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);

    const json = await response.json();

    setMovie(json.data.movie);
    setLoading(false);
  }

  useEffect(() => {
    getMovieDetail();
  }, []);

  return <div>{loading ? (
    <h1>Loading...</h1>
    ) : (
        <Movie
          id={movie.id}
          coverImg={movie.medium_cover_image} 
          title={movie.title} 
          summary={movie.summary}
          genres={movie.genres} />
    )}
    </div>
  }


export default Detail;