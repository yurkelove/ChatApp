import { AUTHORIZATION_ACTION_TYPE } from '../reducers/authorization';
import axios from 'axios';
const url = 'http://localhost:3000/authorization';


export const authorization = (login:string,password:string) => (dispatch:any) => {
		dispatch({
			type: AUTHORIZATION_ACTION_TYPE.LOADING
		});
		axios.get(url)
		.then(() => {
        dispatch({
          type: AUTHORIZATION_ACTION_TYPE.SUCCESS
				})
			}
		).catch( () => {
		  dispatch({
        type: AUTHORIZATION_ACTION_TYPE.FAILURE,
      })
			}
			);
};



