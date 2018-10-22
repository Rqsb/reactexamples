import React from 'react'

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'

const VideoListItem = ({movie}) => <li>
                                    <img height="80px" src={`${IMG_BASE_URL}${movie.poster_path}`} />
                                    <h3>{movie.title}</h3>    
                                </li>

export default VideoListItem