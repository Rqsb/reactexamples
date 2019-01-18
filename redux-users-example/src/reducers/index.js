import { combineReducers } from 'redux';
import reducerUsers from './reducer_users'
import currentUserReducer from './reducer_currentuser'

const rootReducer = combineReducers({
  users: reducerUsers,
  currentUser: currentUserReducer
});

export default rootReducer;
