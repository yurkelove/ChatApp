import React from 'React';
import CircularProgress from '@material-ui/core/CircularProgress';


const LoadingHoc = (Comp:any) => ({ loading,...props }:any) => {
  if ( loading ) {
    return <CircularProgress/>
  } else {
    return (
      <Comp {...props} />
    )
  }
};

export default LoadingHoc;



