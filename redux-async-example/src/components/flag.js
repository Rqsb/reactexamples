import React from 'react'
const API_ENDPOINT = 'http://www.sciencekids.co.nz/images/pictures/flags680/'

const Flag = ({country}) => {
    return <img className="flag" src={`${API_ENDPOINT}${country}.jpg`} />
}

export default Flag