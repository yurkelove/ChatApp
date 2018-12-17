import axios from 'axios';
import { DIALOGS_ACTION_TYPE } from '../reducers/dialogs';


const dialogs_url = 'http://localhost:3000/dialogs';

export const dialogs = () => (dispatch:any) => {
  dispatch({
    type: DIALOGS_ACTION_TYPE.LOADING
  });
  axios.get(dialogs_url)
    .then(() => {
        dispatch({
          type: DIALOGS_ACTION_TYPE.DATA
        })
      }
    ).catch( () => {
      dispatch({
        type: DIALOGS_ACTION_TYPE.FAILURE,
      })
    }
  );
};
