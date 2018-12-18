import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function LoadingHoc(Component:any){
  return function ({ loading , ...props} :any) {
    if(loading){
      return <CircularProgress/>
    }else{
      return (
        <Component {...props}/>
      )
    }
  }
}

export default LoadingHoc;

