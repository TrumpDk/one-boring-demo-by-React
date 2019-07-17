import { combineReducers } from 'redux';
import commonReducer from './commonReducer';
import homeReducer from './homeReducer';

const combinedReducers = combineReducers({
  commonReducer,
  homeReducer
});

export default combinedReducers;
