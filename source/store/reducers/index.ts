import { combineReducers } from 'redux';
import registration from './registration'
import authorization from './authorization'

export default combineReducers({
  registration,
  authorization
});
