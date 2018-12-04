import { REGISTRATION_ACTION_TYPE } from '../reducers/registration';

export const registration = (login:string,password:string,confirmPassword:string) => (dispatch:any) => {
    dispatch({
      type: REGISTRATION_ACTION_TYPE.LOADING
    });
    const promise = new Promise((resolve:any,reject:any) => {
      setTimeout( () => {
        resolve();
      }, 5000 );
    });
      promise.then(() => {
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

