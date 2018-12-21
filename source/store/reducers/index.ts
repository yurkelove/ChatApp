import { combineReducers } from 'redux';
import registration from './registration';
import authorization from './authorization';
import dialogs from './dialogs';
import messages from './messages';

export default combineReducers({
  registration,
  authorization,
  dialogs,
  messages
});
