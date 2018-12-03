import { REGISTRATION_ACTION_TYPE } from '../reducers/registration';

export function registration (login:string,password:string) {

  return (dispatch:any) => {
    dispatch({
      type: REGISTRATION_ACTION_TYPE.LOADING
    });
    const promise = new Promise((resolve:any,reject:any) => {
      setTimeout( () => {
        resolve();
      }, 5000 );
    });
      promise.then(function(){
        dispatch({
          type: REGISTRATION_ACTION_TYPE.SUCCESS
        })
      }
      )
      .catch( function(){
        dispatch({
          type: REGISTRATION_ACTION_TYPE.FAILURE,
        })
      }
      );
    dispatch({
      type:REGISTRATION_ACTION_TYPE.FAILURE,
    })
  }
}



