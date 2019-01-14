import React from 'react'
import VideoListItem from '../components/video-list-item';

const Featured = (props) => {
    const {movies} = props
    const setCurrent = (movie) => props.setCurrent(movie)
    return <ul>{movies.map(movie => <VideoListItem key={movie.id} movie={movie} setCurrent={setCurrent} />)}</ul>
} 

export default Featured