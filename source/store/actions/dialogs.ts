import { DIALOGS_ACTION_TYPE } from '../reducers/dialogs';
import axios from 'axios';

const dialogsURL = 'http://localhost:3000/dialogs';

export const dialogs = () => (dispatch:any) => {
  dispatch({
    type: DIALOGS_ACTION_TYPE.LOADING,
  });
  axios.get(dialogsURL)
    .then((data:any) => {
        dispatch({
          type: DIALOGS_ACTION_TYPE.SUCCESS,
          payload: {dialogs: data.data}
        })
      }
    ).catch( () => {
      dispatch({
        type: DIALOGS_ACTION_TYPE.FAILURE,
      })
    }
  );
};
