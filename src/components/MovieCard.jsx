import React from 'react'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie, type }) => {
    // console.log('MovieSlide => MovieCard', movie)

    return (
        <div
            className='card-item'
            style={{
                backgroundImage:
                    "url(" +
                    `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${movie.poster_path}`
                    + ")"
            }}
        >
            <Link to={`/movies/${movie.id}?type=${type}`}>
                <div className='overlay'>
                    <h1>{movie.title}</h1>
                    <div>
                        <span>평점 {movie.vote_average}</span>{" "}
                        <span>
                            {/* react-bootstrap Badge */}
                            {movie.adult
                                ? <Badge bg="denger">청소년관람불가</Badge>
                                : <Badge bg="success">전체관람가</Badge>
                            }
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard