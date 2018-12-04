import { AUTHORIZATION_ACTION_TYPE } from '../reducers/authorization';

export const authorization = (login:string,password:string) => (dispatch:any) => {
		dispatch({
			type: AUTHORIZATION_ACTION_TYPE.LOADING
		});
		const promise = new Promise((resolve:any,reject:any) => {
			setTimeout( () => {
				resolve();
			}, 5000 );
		});
		promise.then(() => {
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



