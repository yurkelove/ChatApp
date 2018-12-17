import { combineReducers } from 'redux';
import registration from './registration'
import authorization from './authorization'
import dialogs from './dialogs'

export default combineReducers({
  registration,
  authorization,
  dialogs
});
