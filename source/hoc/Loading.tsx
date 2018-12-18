import React from 'React';
import CircularProgress from '@material-ui/core/CircularProgress';

function LoadingHoc(Component:any){
  console.log(Component);
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

