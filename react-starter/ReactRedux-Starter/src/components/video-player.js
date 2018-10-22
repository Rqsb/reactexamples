import React from 'react'

const BASE_URL = "http://www.youtube.com/embed/"

const VideoPlayer = ({key}) =>  <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src={`${BASE_URL}${key}`}/>
                                </div>

export default VideoPlayer