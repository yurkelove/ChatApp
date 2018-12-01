export function CreateAction(login:string,password:string) {

  return (dispatch:any) => {
    dispatch({
      type: 'LOADING',
      payload: payload
    });
    const failure = () => {
      const promise = new Promise((resolve:any) => {
        setTimeout( () => {
          resolve();
        }, 5000 );
      } );
      return promise;
    };
    dispatch({
      type:'FAILURE',
      payload: payload
    })
  }
}


