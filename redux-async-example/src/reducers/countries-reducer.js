import { GET_COUNTRIES, ERROR_GET_COUNTRIES } from '../actions/index'

export default (state = null, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return action.payload;
        case ERROR_GET_COUNTRIES:
            return action.error
    }
    return state;
}