import { GET_MORTALITY, REMOVE_MORTALITY } from '../actions/index'

export default (state = [], action) => {
    switch(action.type) {
        case GET_MORTALITY:
            return [{country: action.country, male:action.male, female:action.female}, ...state]
        case REMOVE_MORTALITY:
            state.splice(state.indexOf(action.payload), 1)
            return [...state] 
    }
    return state;
}