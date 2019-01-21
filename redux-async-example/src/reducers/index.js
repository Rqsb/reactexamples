import { combineReducers } from 'redux';
import CountriesReducer from './countries-reducer'
import MortalityReducer from './mortality-reducer';

const rootReducer = combineReducers({
  countries: CountriesReducer,
  mortality: MortalityReducer
});

export default rootReducer;
