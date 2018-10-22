import React from 'react'
import VideoListItem from '../components/video-list-item';

const Featured = ({movies}) => {
    return <ul>{movies.map(movie => <VideoListItem key={movie.id} movie={movie} />)}</ul>
} 

export default Featured