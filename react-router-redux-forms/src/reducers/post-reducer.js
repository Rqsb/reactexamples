import { POST_ACTION_TYPES } from '../actions/action-types'

const PostReducer = (state = null, action) => {
    switch(action.type) {
        case POST_ACTION_TYPES.READ:
            return action.payload
    }
    return state
}

export default PostReducer