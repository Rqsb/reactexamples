import React from 'react'

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'

const VideoListItem = ({movie}) => <li className="list-group-item">
                                        <div className="media">
                                            <div className="media-left">
                                                <img className="media-left img-rounded media-object" height="80px" src={`${IMG_BASE_URL}${movie.poster_path}`} />
                                            </div>
                                            <div className="media-body">
                                                <h5>{movie.title}</h5> 
                                            </div>
                                        </div>   
                                </li>

export default VideoListItem