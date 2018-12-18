import { REGISTRATION_ACTION_TYPE } from '../reducers/registration';
import axios from 'axios';
const url = 'http://localhost:3000/registration';


export const registration = (login:string,password:string,confirmPassword:string) => (dispatch:any) => {
    dispatch({
      type: REGISTRATION_ACTION_TYPE.LOADING
    });
    axios.get(url)
    .then(() => {
        dispatch({
          type: REGISTRATION_ACTION_TYPE.SUCCESS
        })
      }
    )
    .catch( (error) =>{
        dispatch({
          type: REGISTRATION_ACTION_TYPE.FAILURE,
          error: error.message
        })
      }
    );
};

