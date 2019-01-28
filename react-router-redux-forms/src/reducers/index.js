import { combineReducers } from 'redux';
import PostsReducer from './posts-reducer'
import PostReducer from './post-reducer'
import {reducer as ReducerForm} from 'redux-form'

const rootReducer = combineReducers({
  posts: PostsReducer,
  currentPost: PostReducer,
  form: ReducerForm
});

export default rootReducer;
