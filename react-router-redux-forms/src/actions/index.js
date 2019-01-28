import axios from 'axios'
import { POST_ACTION_TYPES } from './action-types'
const API_ENDPOINT = 'http://localhost:3000'

export const readAllPosts = () => {
    return (dispatch) => {
        axios.get(`${API_ENDPOINT}/posts`).then((response) => {
            dispatch({type: POST_ACTION_TYPES.READ_ALL, payload: response.data})
        })
    }
}

export const readPost = (id) => {
    return (dispatch) => {
        axios.get(`${API_ENDPOINT}/posts/${id}`).then((response) => {
            dispatch({type: POST_ACTION_TYPES.READ, payload: response.data})
        })
    }
}

export const deletePost = (id) => {
    return (dispatch) => {
        axios.delete(`${API_ENDPOINT}/posts/${id}`).then((response) => {
            dispatch({type: POST_ACTION_TYPES.DELETE, payload: id})
        })
    }
}

export const createPost = (post) => {
    return (dispatch) => {
        axios.post(`${API_ENDPOINT}/posts/`, {...post}).then((response) => {
            dispatch({type: POST_ACTION_TYPES.CREATE, payload: response.data})
        })
    }
}