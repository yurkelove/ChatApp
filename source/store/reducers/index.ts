import { combineReducers } from 'redux';
import registration_red from './registration';
import authorization_red from './authorization';

export default combineReducers({
  registration_red,
  authorization_red
});
