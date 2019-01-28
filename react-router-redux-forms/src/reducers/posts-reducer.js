import { POST_ACTION_TYPES } from '../actions/action-types'

export default (state = [], action) => {
    switch(action.type) {
        case POST_ACTION_TYPES.READ_ALL:
            return action.payload
        case POST_ACTION_TYPES.DELETE:
            return state.filter((item) => item.id != action.payload)
        case POST_ACTION_TYPES.CREATE:
            return [...state, action.payload]
    }
    return state
}