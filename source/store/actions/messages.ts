import { MESSAGES_ACTION_TYPE } from '../reducers/messages';
import axios from 'axios';

const messageURL = "http://localhost:3000/messages";

export const messages = () => (dispatch:any) => {
    dispatch({
      type: MESSAGES_ACTION_TYPE.LOADING,
    });
    axios.get(messageURL)
      .then((data:any) => {
          dispatch({
            type: MESSAGES_ACTION_TYPE.SUCCESS,
            payload: {messages: data.data}
          })
        }
      ).catch( () => {
        dispatch({
          type: MESSAGES_ACTION_TYPE.FAILURE,
        })
      }
    );
  };
