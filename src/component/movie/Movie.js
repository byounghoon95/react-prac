import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// Link 는 a 태그랑 같은 효과
// const Movie = (props) => { 와 같이 사용해도 무방
const Movie = ({ id, coverImg, title, summary, genres }) => {
    return (
        <div key={id}>
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link> 
          </h2>
          <img src={coverImg}/>
          <p>{summary}</p>
          <ul>
            {
              genres.map(g => <li key={g}>{g}</li>)
            }
          </ul>
      </div>
    );
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;