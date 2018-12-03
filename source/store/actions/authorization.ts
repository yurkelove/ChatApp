import { AUTHORIZATION_ACTION_TYPE } from '../reducers/authorization';

export function authorization(login:string,password:string) {

	return  (dispatch:any) => {
		dispatch({
			type: AUTHORIZATION_ACTION_TYPE.LOADING
		});
		const promise = new Promise((resolve:any,reject:any) => {
			setTimeout( () => {
				resolve();
			}, 5000 );
		});
		promise
      .then(function(){
         dispatch({
					 type: AUTHORIZATION_ACTION_TYPE.SUCCESS
				})
			}
		)
			.catch( function(){
			   dispatch({
           type: AUTHORIZATION_ACTION_TYPE.FAILURE,
        })
			}
			);
		dispatch({
			type:AUTHORIZATION_ACTION_TYPE.FAILURE,
		})
	}
}



